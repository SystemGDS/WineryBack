const mercadopago = require("mercadopago")
require("dotenv").config();
const { MERCADOPAGO_KEY } = process.env;
const { Order, Users, Wines } = require("../db");
const { updateCart } = require("./userController")

const postPayment = async(items, payer) =>  {
    mercadopago.configure({
        access_token: MERCADOPAGO_KEY,
    });

   const result = await mercadopago.preferences.create({
        items,  // id, title, picture_url, description, unit_price, category_id, quantity
        payer,  // payer: {name, surname, email}
        binary_mode: true,
        back_urls:{
            success: "https://henrywinery.netlify.app/about",
            failure: "http://127.0.0.1:5173/",
            pending: "http://127.0.0.1:5173/",
        },
        notification_url: "https://4c59-2800-810-5e3-852c-5496-9037-73c8-6fc2.sa.ngrok.io/webhook",
        metadata: payer,
    })

    return result
}


const webhookPayment = async (topic, paymentId) =>  {
    try {
        if(topic === "payment"){
            const data = await mercadopago.payment.findById(Number(paymentId))
            return  data
       }
    } catch (error) {
        console.log({error: error.message})
    }
}

const createOrder = async(orderMP) => {
    const user = await Users.findOne({where: {email: orderMP.metadata.email}})

    try {
        const [orderCreated, created] = await Order.findOrCreate({
            where:{
                id: orderMP.id
            },
            defaults:{
            id: orderMP.id,
            userId: user.id,
            items: orderMP.items,
            status: orderMP.status === "approved"? true : false,
            statusDetail: orderMP.status === "approved"? "Paid" : "In process",
            datePayment: new Date(orderMP.dateApproved).toISOString().split('T')[0],
            total: orderMP.total,
            }
        })

        if(created){
            await updateCart(user.id, [])

            for (const item of orderMP.items) {
                const vino = await Wines.findByPk(Number(item.id))
                if(vino){
                    vino.stock = vino.stock - Number(item.quantity);
                    await vino.save()
                }
            }
        }
        
        return [orderCreated, created]
    
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {
    postPayment,
    webhookPayment,
    createOrder
}