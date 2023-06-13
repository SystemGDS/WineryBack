const { merchant_orders } = require("mercadopago")
const { postPayment, webhookPayment, createOrder } = require("../controllers/paymentController")

const postPaymentHandler = async (req, res) => {
    const { items, payer} = req.body
    try {
        const result = await postPayment(items, payer)

        return res.status(200).json(result.body.sandbox_init_point)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }

}

const webhookPaymentHandler = async (req, res) => {
    const { query } = req;
    const topic = query.topic || query.type
    try {
        if(topic === "payment" ){
            const paymentId = query["data.id"];
            const result = await webhookPayment(topic, paymentId)
            const paymentStatus = result.body.status
            const order = {
                id: paymentId,
                items: result.body.additional_info.items,
                paymentType: result.body.payment_type_id,
                status: paymentStatus,
                statusDetail: result.body.status_detail,
                dateApproved: result.body.date_approved,
                total: result.body.transaction_details.total_paid_amount,
                metadata: result.body.metadata,
                order: result.body.order
            }
            console.log(order) 
              if(paymentStatus === "approved"){
              
               const [orderCreated, created] = await createOrder(order) 

               created
               ? res.sendStatus(201)
               : res.sendStatus(500)

            }

            
        }
        if(topic === "merchant_order"){
           return  res.sendStatus(201)
        }
       
    } catch (error) {
       console.log(error)
       return res.sendStatus(500)
    }
}

const successPaymentHandler = (req, res) => {
    res.send("success")
}

const failurePaymentHandler = (req, res) => {
    res.send("failure")
}

const pendingPaymentHandler = (req, res) => {
    res.send("pending")
}



module.exports = {
    postPaymentHandler,
    successPaymentHandler,
    failurePaymentHandler,
    pendingPaymentHandler,
    webhookPaymentHandler
}