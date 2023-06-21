const { Users, Cart, Order, Review, Wines } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

// const fakeUser = async () => {
//     const allUsers = await Users.findAll()
//     if(allUsers.length) return allUsers;
//     else {
//         const usersApi = (await axios.get("https://jsonplaceholder.typicode.com/users")).data.map(user =>{
//             return {
//                 name: user.name,
//                 userName: user.username,
//                 email: user.email,
//                 direction: user.address.city,

//             }

//         })
//         const usersDB = await Users.bulkCreate(usersApi, {returning: true})

//         return usersDB
//     }
// }

const fakeUser = async () => {
  const allUsers = await Users.findAll();
  if (allUsers.length) return allUsers;
  else {
    const usersApi = (
      await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data.map((user) => {
      return {
        name: user.name,
        userName: user.username,
        email: user.email,
        direction: user.address.city,
      };
    });

    const usersDB = await Promise.all(
      usersApi.map(async (user) => {
        const [newUser, created] = await Users.findOrCreate({
          where: {
            email: user.email,
          },
          defaults: {
            name: user.name,
            email: user.email,
            userName: user.userName,
          },
        });

        if (created) {
          const cart = await Cart.create();
          await newUser.setCart(cart);
        }

        return newUser;
      })
    );

    return usersDB;
  }
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll({
    include: [
      {
        model: Cart,
      },
      {
        model: Order,
      },
    ],
  });

  return allUsers;
};

const getUserByUserName = async (username) => {
  const userByUserName = await Users.findAll({
    where: {
      userName: {
        [Op.iLike]: `%${username}%`,
      },
    },
  });

  return userByUserName;
};

const getUserById = async (id) => {
  const userById = await Users.findByPk(Number(id), {
    include: [
      {
        model: Cart,
      },
      {
        model: Order,
      },
    ],
  });

  return userById;
};

const getUserByEmailController = async (email) => {
  const userByEmail = await Users.findOne({
    where: {
      email: email,
    },
    include: [
     {
      model: Order,
     },
     {
      model: Cart
     }
    ]
    
  });

  return userByEmail;
};

const createUser = async (name, userName, email, image) => {
  const [newUser, created] = await Users.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
      name,
      email,
      userName,
      image,
    },
  });

  if (created) {
    const cart = await Cart.create();
    await newUser.setCart(cart);
  }

  return [newUser, created];
};

const updateCart = async (userId, wines) => {
  const cart = await Cart.findOne({ where: { userId } });
  cart.products = [...wines]; //cart = {wines:[{id, image, name, stock, price, quantity}], userId:{id}}
  const totalPrice = wines.reduce((acumulator, wine) => {
    const totalByProduct = wine.quantity * wine.price;
    return acumulator + totalByProduct;
  }, 0);
  cart.total = totalPrice;
  await cart.save();

  return cart;
};

const createReview = async (userId, wineId, comment, stars) => {
  const userByEmail = await Users.findOne({
    where:{
      email: userId
    }
  })

  const existingReview = await Review.findOne({
    where: {
      userId: userByEmail.id,
      wineId,
    },
  });

  if (existingReview) {
    throw new Error("Already have a review on this product");
  }
  const newReview = await Review.create({ userId, wineId, comment, stars });

  return newReview;
};

const updateUser = async (userName, direction, image, email, birthday) => {
  const props = {};
  if (userName) props.userName = userName;
  if (direction) props.direction = direction;
  if (image) props.image = image;
  if(birthday) props.birthday = birthday

  const user = await Users.update(props, {
    where: {
      email,
    },
  });

  console.log(user);
  return user;
};
const banUser = async (email) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) throw new Error(`No user found with email${email}`);
  await user.update({ banned: !user.banned });

  return user;
};

const createAdmin = async (email) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) throw new Error(`No user found with email ${email}`);
  await user.update({ isAdmin: !user.isAdmin });

  return user;
};

const updateFavorites = async (email, wines) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) throw new Error(`No user found with email ${email}`);
  user.favorites = [...wines]; //{id, name,image, price}
  await user.save();

  return user;
};

const getAllOrders = async() =>{
    const allOrders = await Order.findAll()
      const salesByProduct = {};
    
//    allOrders.forEach((order) => {           // trae las ventas por producto
//         order.items.forEach(async(item) => {
//           const productId = Number(item.id);
//           const quantity = Number(item.quantity);
          
//           if(productId in salesByProduct){
//             salesByProduct[productId].quantity += quantity
//           }
//           else{
//             salesByProduct[productId] = {
//                 id: productId,
//                 name: item.title,
//                 image: item.picture_url,
//                 category: item.description,
//                 quantity: quantity
//               }
//           }
          
          
 //       });
  //  });


    
    return allOrders;//{id, name, image, category, quantity}
}

const deleteReview = async (id) => {
  const reviewDeleted = await Review.destroy({
    where: {
      id,
    },
    force: true,
  });

  return reviewDeleted;
};



const updateOrder = async (id, status) => {
    const allowedStatus = ['In process', 'Paid', 'Shipped', 'Delivered', 'Cancelled'];
  
    if (!allowedStatus.includes(status)) {
      throw new Error('Invalid status');
    }
  
    const order = await Order.findByPk(Number(id));
  
    if (!order) {
      throw new Error('Order not found');
    }
  
    order.statusDetail = status;
  
    await order.save();
  
    return order;
  };
  

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
    getAllOrders,
    deleteReview,
    getUserByEmailController,
    updateOrder
}