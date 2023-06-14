const { getAllUsers, getUserByUserName, fakeUser, getUserById, createUser, updateCart, createReview} = require("../controllers/userController")

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
        res.status(400).json({error:error.message})
    }    
}

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
        res.status(400).json({error: error.message})
    }
}

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
            res.status(400).json({error: error.message})
        }} 
} 

const putCart = async (req, res) => {
    const {userId, wines} = req.body;

    try {
        const cartUpdated = await updateCart(userId, wines);
        return res.status(200).json(cartUpdated)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const postReview = async (req, res) => {
    const propNecesarias = ["userId", "wineId", "comment", "stars"];
    const propFaltantes = []

    propNecesarias.forEach(prop => {
        if(!req.body[prop]) propFaltantes.push(prop)
    })
    if(propFaltantes.length) {
        const faltantes = `Campos obligatorios: ${propFaltantes.join(", ")}`
        res.status(400).json({message: faltantes})
    }
    else {
        const { userId, wineId, comment, stars} = req.body;
        try {
            const newComment = await createReview(userId, wineId, comment, stars)
            res.status(200).json(newComment)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = {
    getUsers,
    userByIdHandler,
    postUserHandler,
    putCart,
    postReview
}