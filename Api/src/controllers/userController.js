const { Users, Cart, Order, Review } = require("../db")
const axios = require("axios")
const { Op } = require("sequelize")

const fakeUser = async () => {
    const allUsers = await Users.findAll()
    if(allUsers.length) return allUsers;
    else {
        const usersApi = (await axios.get("https://jsonplaceholder.typicode.com/users")).data.map(user =>{
            return {
                name: user.name,
                userName: user.username,
                email: user.email,
                direction: user.address.city,

            }
            
        })
        const usersDB = await Users.bulkCreate(usersApi, {returning: true})

        return usersDB
    }
}

const getAllUsers = async () => {
    const allUsers = await Users.findAll({
        include:[
            {
                model: Cart
            },
            {
                model: Order
            }
        ]
    })

    return allUsers
}

const getUserByUserName = async (username) => {
    const userByUserName = await Users.findAll({
        where:{
            userName:{ 
                [Op.iLike]: `%${username}%`
            }
        }
    })

    return userByUserName
}

const getUserById = async (id) => {
    const userById = await Users.findByPk(Number(id),{
        include:[
            {
                model: Cart
            },
            {
                model: Order
            }
        ]
    })

    return userById
}

const createUser = async (name, userName, email) => {
    const [newUser, created] = await Users.findOrCreate({
        where:{
            email:email
        },
        defaults:{
            name,
            email,
            userName
        }
    })

    if (created) {
        const cart = await Cart.create();
        await newUser.setCart(cart);
      }
    

    return [newUser, created];
}

const updateCart = async(userId, wines) => {
    const cart = await Cart.findOne({where:{userId}})
    cart.products = [...wines]  //cart = {wines:[{id, image, name, stock, price, quantity}], userId:{id}}
    const totalPrice = wines.reduce((acumulator, wine) => {
        const totalByProduct = wine.quantity * wine.price;
        return acumulator + totalByProduct
    }, 0)
    cart.total = totalPrice
    await cart.save()

    return cart
}

const createReview = async (userId, wineId, comment, stars) => {
  const newReview = await Review.create({userId, wineId, comment, stars})

  return newReview
}

const updateUser = async(userName, direction, image, email)=> {
    const props = {};
    if(userName) props.userName= userName
    if(direction) props.direction = direction
    if(image) props.image = image

    const user = await Users.update(props,{
        where:{
            email
        }
    })

    return user
}
const banUser = async(email)=> {
    const user = await Users.findOne({where: {email}})
    if(!user) throw new Error(`No se encontro usuario con el email ${email}`)
    await user.update({banned: !user.banned})

    return user
}

const createAdmin = async(email) => {
    const user = await Users.findOne({where:{email}})
    
    if(!user) throw new Error(`No se encontro usuario con el email ${email}`)
    await user.update({isAdmin:!user.isAdmin})

    return user
}

const updateFavorites = async(email, wines) =>{
    const user = await Users.findOne({where: {email}})
    if(!user) throw new Error(`No se encontro usuario con el email ${email}`)
    user.favorites = [...wines] //{id, name,image, price}
    await user.save()
    
    return user
}

const getAllOrders = async() =>{
    const todosusers = await getAllUsers()
    

    console.log("qloq")

    return todosusers
}



module.exports = {
    getAllUsers,
    getUserByUserName,
    fakeUser,
    getUserById,
    createUser,
    updateCart,
    createReview,
    updateUser,
    banUser,
    createAdmin,
    updateFavorites,
    getAllOrders
}