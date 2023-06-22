const {
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
  updateOrder, getAllOrders,
  deleteReview,
  getUserByEmailController,
  getReviewByEmailAndIdProduct,
} = require("../controllers/userController");
//trae todos los usuarios de la base de datos o por username
const getUsers = async (req, res) => {
  const { username } = req.query;
  const fakeUsers = await fakeUser();
  try {
    if (!username) {
      const allUsers = await getAllUsers();
      res.status(200).json(allUsers);
    } else {
      const userByUserName = await getUserByUserName(username);
      userByUserName
        ? res.status(200).json(userByUserName)
        : res
            .status(400)
            .json({ message: `It was not found ${userByUserName}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//trae un usuario por id
const userByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) res.status(400).json({ message: "Id is missing" });
    else {
      const userById = await getUserById(id);
      userById
        ? res.status(200).json(userById)
        : res.status(200).json({ message: `User id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//trae user por email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    if (!email) res.status(400).json({ message: "Email is missing" });
    else {
      const userByEmail = await getUserByEmailController(email);
      userByEmail
        ? res.status(200).json(userByEmail)
        : res
            .status(400)
            .json({ message: `User with email ${email} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//crea un usuario y lo vincula a un carrito
const postUserHandler = async (req, res) => {
  const propNecesarias = ["name", "userName", "email"];
  const propFaltantes = [];

  propNecesarias.forEach((prop) => {
    if (!req.body[prop]) propFaltantes.push(prop);
  });
  if (propFaltantes.length) {
    const faltantes = `Required fields: ${propFaltantes.join(", ")}`;
    res.status(400).json({ message: faltantes });
  } else {
    const { name, userName, email, direction, image } = req.body;
    try {
      const [newUser, created] = await createUser(name, userName, email, image);
      created
        ? res.status(200).json({
            message: `El usuario ${userName} se ha creado exitosamente`,
          })
        : res.status(200).json({ message: `Ya existe usuario con ${email}` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
//hace una copia del carro que hay en front
const putCart = async (req, res) => {
  const { userId, wines } = req.body;

  try {
    const cartUpdated = await updateCart(userId, wines);
    return res.status(200).json(cartUpdated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//crea una review y la vincula a un user y un vino
const postReview = async (req, res) => {
  const propNecesarias = ["userId", "wineId", "comment", "stars"];
  const propFaltantes = [];

  propNecesarias.forEach((prop) => {
    if (!req.body[prop]) propFaltantes.push(prop);
  });
  if (propFaltantes.length) {
    const faltantes = `Required fields: ${propFaltantes.join(", ")}`;
    return res.status(422).json({ message: faltantes });
  } else {
    const { userId, wineId, comment, stars } = req.body;
    try {
      const newComment = await createReview(userId, wineId, comment, stars);
      return res.status(200).json(newComment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
//modifica las propiedades username, direction o image de perfil de un usuario. el email no se modifica.
const putUser = async (req, res) => {
  const { userName, direction, image, email, birthday } = req.body;
  console.log(image);

  try {
    if (!email) return res.status(422).json({ message: "Falta el email" });
    else {
      const userUpdated = await updateUser(
        userName,
        direction,
        image,
        email,
        birthday
      );
      userUpdated > 0
        ? res.status(200).json({ message: "Profile modified successfully" })
        : res
            .status(200)
            .json({ message: `No profile found with email ${email}` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//cambia la propiedad banned(booleano) del user
const banHandler = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(422).json({ message: "Email is missing" });
    const userBanned = await banUser(email);
    userBanned.banned
      ? res.status(200).json({
          message: `User with email ${email} has been successfully banned`,
        })
      : res
          .status(200)
          .json({ message: `The user has been successfully enabled!` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//cambia la propiedad isAdmin(booleano) del user
const adminHandler = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(422).json({ message: "Email is missing" });
    const newAdmin = await createAdmin(email);
    newAdmin.isAdmin
      ? res.status(200).json({ message: `${email} now he is administrator` })
      : res
          .status(200)
          .json({ message: `Administrator status revoked for ${email}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//copia la lista de favoritos del front y crea un registro en la bd
const putFavorites = async (req, res) => {
  const { email, wines } = req.body;
  try {
    if (!email) return res.status(422).json({ message: "Email is missing" });
    const favoritesUpdated = await updateFavorites(email, wines);
    return res.status(200).json(favoritesUpdated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//trae todas las ordenes de compra de la bd
const getOrders = async (req, res) => {
  try {
    const allOrders = await getAllOrders();
    allOrders
      ? res.status(200).json(allOrders)
      : res.status(400).json({ message: "There are no purchase orders" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//borra una review por id
const deleteReviewHandler = async (req, res) => {
    const { reviewId } = req.body;
    try {
        const reviewDeleted = await deleteReview(reviewId)
        reviewDeleted > 0
        ? res.status(200).json({message: "Review deleted"})
        : res.status(500).json({message:`Could not delete review with id ${reviewId}`})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

const putOrder = async(req, res) =>{
    const {orderId, status} = req.body;
    try {
        if(!orderId) return res.status(422).json({message: "Order id is missing"})
        const orderUpdated = await updateOrder(orderId, status)
        orderUpdated
        ? res.status(200).json({order: orderUpdated, message:"Status changed successfully"})
        : res.status(500).json({message:"Could not change status"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

const getReviewByEmail = async (req, res) =>{
    const {userId, wineId} = req.params
    console.log(req.params)
    try {
        const review = await getReviewByEmailAndIdProduct(userId, wineId)
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

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
    getOrders,
    deleteReviewHandler,
    getUserByEmail,
    putOrder,
    getReviewByEmail
}