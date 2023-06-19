const { Wines, Review } = require("../db");
const axios = require("axios")
const { Op } = require("sequelize");
const { nuevosVinosProvisionales } = require("../utils/arrayWines")

const fetchAndSaveWinesFromAPI = async () => {
  // const excludedIds = [76, 111, 514, 269, 343, 370, 402, 413, 427, 469, 482, 483, 541, 537, 598, 663, 686, 702, 1, 12, 16, 21, 25, 26, 31, 33, 40, 43, 46, 54, 55, 58, 63, 69, 70, 101, 145, 146, 177, 184, 191, 193, 200, 203, 209, 219, 230, 251, 257, 265, 280, 514, 719];

  // const infoApi = (await axios.get("https://api.sampleapis.com/wines/reds")).data.filter(vino => !excludedIds.includes(vino.id)).map(vino => {
  //   const tinto = vino.id > 0 && vino.id < 201 ? "Red wine" : "";
  //   const blanco = vino.id > 200 && vino.id < 401 ? "White wine" : "";
  //   const rosado = vino.id > 400 && vino.id < 601 ? "Rose wine" : "";
  //   const espumoso = vino.id > 600 && vino.id < 801 ? "Sparkling wine" : "";
  //   const category = tinto || blanco || rosado || espumoso;
  //   const origenArray = vino.location.split("\n");
  //   const origen = origenArray.length > 1 ? `${origenArray[0]} - ${origenArray[2]}` : "Henry States";

  //   return {
  //     name: vino.wine,
  //     winery: vino.winery.length ? vino.winery : "Henry winery",
  //     origin: origen,
  //     image: vino.image,
  //     category: category,
  //     detail: `The ${vino.wine} is a ${category} produced in ${origen}. It originates from the renowned winery ${vino.winery.length ? vino.winery : "Henry Winery"}, known for its dedication and expertise in crafting quality wines.`,
  //     stock: Math.floor(Math.random() * vino.rating.reviews.split(" ")[0] / 2),
  //     price: vino.rating.reviews.split(" ")[0],
  //     idReviews: [],
  //     banned: false,
  //   };
  // });

  
  // const winesDB = await Wines.bulkCreate(infoApi, { returning: true });

  // return winesDB;

  const winesDB = await Wines.bulkCreate(nuevosVinosProvisionales, { returning: true });

  return winesDB;
};

const checkDatabaseEmpty = async () => {
  const count = await Wines.count();
  return count === 0;
};



const getWinesFromDatabase = async (page, limit) => {
  const offset = (page - 1) * limit;

  const wines = await Wines.findAll({
    // offset: offset,
    // limit: limit,
  });

  return wines;
};

const getAllWines = async (page = 1, limit = 10) => {
  const isEmpty = await checkDatabaseEmpty();

  if (isEmpty) {
    const winesFromAPI = await fetchAndSaveWinesFromAPI();
    // const totalCount = winesFromAPI.length;
    // const startIndex = (page - 1) * limit;
    // const endIndex = startIndex + limit;
    // const paginatedWines = winesFromAPI.slice(startIndex, endIndex);

    return winesFromAPI
  } else {
    const totalCount = await Wines.count();
    const winesFromDatabase = await getWinesFromDatabase(page, limit);

    return winesFromDatabase
  }
};

const getAllOrigins = async () => {
  const origins = await Wines.findAll({
    attributes: ['origin'],
    group: ['origin'],
  });

  const origenes = origins.map(wine=> wine.origin.split(" - ")[0])
  const setOrigins = new Set(origenes)
  return [...setOrigins];
}

const getWineById = async (id) => {
    const wine = await Wines.findByPk(id,
      {
        include: [
          {
            model: Review
          }
        ]
      })
    return wine
}

  const applyFilters = async (name, category, origin, page, limit) => {
    const filterOptions = {};
  
    if (name) {
      filterOptions.name = {
        [Op.iLike]: `%${name}%`
      };
    }
  
    if (category) {
      const categoryValues = category.split(",");
      filterOptions.category = {
        [Op.or]: categoryValues.map(c => ({ [Op.iLike]: `%${c}%` }))
      };
    }
  
    if (origin) {
      const originValues = origin.split(",");
      filterOptions.origin = {
        [Op.or]: originValues.map(o => ({ [Op.iLike]: `%${o}%` }))
      };
    }
  
    const winesFiltered = await Wines.findAll({
      where: filterOptions,
      // offset: (page - 1) * limit,
      // limit: limit
    });
  
    return winesFiltered;
  };
  
  

const createWine = async (image, name, winery, detail, price, category, stock, origin) => {
    const [newWine, created] = await Wines.findOrCreate({
        where:{
            name: name,
        },
        defaults:{
            image,
            name,
            winery,
            origin,
            detail,
            category,
            stock,
            price,
        }
    })

    return [newWine, created]
}

const deleteLogicWine = async (id) => {
    const wine = await Wines.findByPk(Number(id));
    const wineBanned = await wine.update({
        banned: !wine.banned
    });
    return wineBanned
}

const deleteWine = async (id) => {
    const wine = await Wines.findByPk(Number(id))
    if(wine){
        await Wines.destroy({where:{id: Number(id)}});
        return {success:`Wine with id ${id} removed successfully.`}
    }
    else{
        return {error: `There is no wine with id ${id}.`}
    }
}

const updateWine = async (id, name, winery, origin, detail, image, category, stock, price) => {
    const updatePropertys = {};

    if (image !== undefined && image !== null) {
        updatePropertys.image = image;
      }
      if (name !== undefined && name !== null) {
        updatePropertys.name = name;
      }
      if (winery !== undefined && winery !== null) {
        updatePropertys.winery = winery;
      }
      if (detail !== undefined && detail !== null) {
        updatePropertys.detail = detail;
      }
      if (price !== undefined && price !== null) {
        updatePropertys.price = Number(price);
      }
      if (category !== undefined && category !== null) {
        updatePropertys.category = category;
      }
      if (stock !== undefined && stock !== null) {
        updatePropertys.stock = Number(stock);
      }
      if (origin !== undefined && origin !== null) {
        updatePropertys.origin = origin;
      }

      const wineUpdated = await Wines.update(updatePropertys,{
        where:{
            id: Number(id)
        }
      })

    return wineUpdated
}

module.exports = {
    getAllWines,
    getWineById,
    createWine,
    deleteLogicWine,
    deleteWine,
    updateWine,
    getAllOrigins,
    applyFilters
}