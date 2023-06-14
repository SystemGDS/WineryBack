const { getAllUsers, getUserByUserName, fakeUser, getUserById, createUser,
     updateCart, createReview, updateUser, banUser, createAdmin, updateFavorites, getAllOrders} = require("../controllers/userController")
//trae todos los usuarios de la base de datos o por username
const getUsers = async (req, res) => {
    const { username } = req.query;
    const fakeUsers = await fakeUser()
    try {
        if(!username){
            const allUsers = await getAllUsers()
            res.status(200).json(allUsers)
        }
        else{
            const userByUserName = await  getUserByUserName(username)
            userByUserName
            ? res.status(200).json(userByUserName)
            : res.status(400).json({message:`No se encontro ${userByUserName}`})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }    
}

//trae un usuario por id
const userByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        if(!id) res.status(400).json({message:"Falta el id"})
        else{
            const userById = await getUserById(id)
            userById
            ? res.status(200).json(userById)
            : res.status(400).json({message:`No se encontro usuario con id ${id}`})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
//crea un usuario y lo vincula a un carrito
const postUserHandler = async (req, res) => {
    const propNecesarias = ["name", "userName", "email"];
    const propFaltantes = [];

    
        propNecesarias.forEach(prop => {
            if(!req.body[prop]) propFaltantes.push(prop);
        });
        if(propFaltantes.length) {
            const faltantes = `Campos obligatorios: ${propFaltantes.join(", ")}`
            res.status(400).json({message: faltantes})
        }
        else{
            const { name, userName, email, direction } = req.body;
            try {
                const [newUser, created] = await createUser(name, userName, email)
                created
                ? res.status(200).json({message: `El usuario ${userName} se ha creado exitosamente`})
                : res.status(400).json({message: `Ya existe usuario con ${email}`})
        } catch (error) {
            res.status(500).json({error: error.message})
        }} 
} 
//hace una copia del carro que hay en front
const putCart = async (req, res) => {
    const {userId, wines} = req.body;

    try {
        const cartUpdated = await updateCart(userId, wines);
        return res.status(200).json(cartUpdated)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
//crea una review y la vincula a un user y un vino
const postReview = async (req, res) => {
    const propNecesarias = ["userId", "wineId", "comment", "stars"];
    const propFaltantes = []

    propNecesarias.forEach(prop => {
        if(!req.body[prop]) propFaltantes.push(prop)
    })
    if(propFaltantes.length) {
        const faltantes = `Campos obligatorios: ${propFaltantes.join(", ")}`
       return res.status(422).json({message: faltantes})
    }
    else {
        const { userId, wineId, comment, stars} = req.body;
        try {
            const newComment = await createReview(userId, wineId, comment, stars)
           return res.status(200).json(newComment)
        } catch (error) {
           return res.status(500).json({error: error.message})
        }
    }
}
//modifica las propiedades username, direction o image de perfil de un usuario. el email no se modifica.
const putUser = async (req, res) => {
    const { userName, direction, image, email} = req.body
    try {
        if(!email) return res.status(422).json({message: "Falta el email"})
        else{
        const userUpdated = await updateUser(userName, direction, image, email)
        userUpdated > 0
        ? res.status(200).json({message: "Perfil modificado exitosamente"})
        : res.status(400).json({message: `No se encontro perfil con el email ${email}`})
        }
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
} 
//cambia la propiedad banned(booleano) del user 
const banHandler = async(req, res) => {
    const { email} = req.body;
    try {
        if(!email) return res.status(422).json({message:"Falta el email"})
        const userBanned = await banUser(email)
        userBanned.banned
        ? res.status(200).json({message: `El usuario con email ${email} se ha baneado exitosamente`})
        : res.status(200).json({message: `El usuario se ha habilitado con exito!`})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
//cambia la propiedad isAdmin(booleano) del user 
const adminHandler = async(req, res) => {
    const { email } = req.body;
    try {
        if(!email) return res.status(422).json({message:"Falta el email"})
        const newAdmin = await createAdmin(email)
        newAdmin.isAdmin
        ? res.status(200).json({message:`${email} ahora es administrador`})
        : res.status(400).json({message:`${email} ya no es administrador`})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

const putFavorites = async(req, res) => {
    const { email, wines } = req.body;
    try {
        if(!email) return res.status(422).json({message: "Falta el email"})
        const favoritesUpdated = await updateFavorites(email, wines)
        return res.status(200).json(favoritesUpdated)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

// const getOrders = async(req, res) => {
//    console.log("qloq")
//    res.status(200).send(":D")
// }

module.exports = {
    getUsers,
    userByIdHandler,
    postUserHandler,
    putCart,
    postReview,
    putUser,
    banHandler,
    adminHandler,
    putFavorites,
    // getOrders
}