const { getAllWines, getWineById, createWine, deleteLogicWine, 
  deleteWine, updateWine, getAllOrigins, applyFilters } = require("../controllers/winesController")

// trae todos los vinos de la base de datos(si no hay los crea) o devuelve los vinos por name si recique query
const getWines = async (req, res) =>{
    const { name, origin, category, page, limit, allOrigins} = req.query;
    const pageLimit = limit? parseInt(limit) : 10
    const currentPage = page? parseInt(page) : 1

    try {
      let winesFiltered = [];
  
      if (name || category || origin) {
        winesFiltered = await applyFilters(name, category, origin);
      } else if (allOrigins) {
        const result = await getAllOrigins();
        return res.status(200).json(result);
      } else {
        winesFiltered = await getAllWines();
      }
  
      if (winesFiltered.length) {
        res.status(200).json(winesFiltered);
      } else {
        res.status(400).json({ message: 'No se encontraron vinos que cumplan los criterios de búsqueda.' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}

//devuelve los vinos por id
const wineByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const wine = await getWineById(id);
        if(wine) return res.status(200).json(wine);
        else return res.status(400).json({message:`No se encontro el vino con el id ${id}`})
    } catch (error) {
      return  res.status(400).json({error: error.message})
    }
}

//crea un nuevo vino en la base de datos
const createWineHandler = async (req, res) => {
    const propNecesarias = ["image", "name", "winery", "detail", "price", "category", "stock", "origin"];
      const propFaltantes = [];
      propNecesarias.forEach((prop) => {
        if (!req.body[prop]) {
          propFaltantes.push(prop);
        }
      });
      if (propFaltantes.length > 0) {
        const faltantes = `Campos faltantes: ${propFaltantes.join(', ')}`;
        res.status(400).json({ message: faltantes });
      } else {
        const { image, name, winery, detail, price, category, stock, origin } = req.body;
        try {
          const [newWine, created] = await createWine(
            image,
            name,
            winery,
            detail,
            price,
            category,
            stock,
            origin
          );
          created
            ? res.status(200).json({message:`El vino ${name} se ha creado exitosamente`})
            : res.status(200).json({message:`El vino ${name} ya existe`});
        } catch (error) {
         return res.status(400).json({ error: error.message });
        }
      }
}

//deshabilita o habilita un vino para el borrado logico
const deleteLogicHandler = async (req, res) => {
  const { id } = req.body;
  try {
    const wineBanned = await deleteLogicWine(id);
    wineBanned.banned 
    ? res.status(201).json({message:"El vino se ha deshabilitado"})
    : res.status(201).json({message:"El vino se ha habilitado con éxito!"});
  } catch (error) {
   return res.status(400).json({error: error.message})
  }  
}

//borra un vino de la base de datos
const deleteHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if(isNaN(id)){
      return res.status(400).json({message:`El id ${id} no es válido`});
    }
    else{
      const result = await deleteWine(id)
        result.success 
        ? res.status(200).json({message: result.success})
        : res.status(400).json({message: result.error})
      
    }
  } catch (error) {
   return res.status(400).json({error: error.message})
  }
}

//Modifica un vino de la base de datos
const updateWineHandler = async (req, res) => {
  const { id, name, winery, origin, detail, image, category, stock, price} = req.body;
  try {
    if (isNaN(id)) return res.status(400).json({ message: "El Id proporcionado no es válido" });
    else{
    const wineUpdated = await updateWine(id, name, winery, origin, detail, image, category, stock, price);
    wineUpdated[0] > 0
    ? res.status(200).json({ message: 'El vino se actualizo con éxito!'})
    : res.status(400).json({ message: `No se encontro vino con id ${id}`})
    }
  } catch (error) {
   return res.status(400).json({error: error.message})
  }
}

module.exports = {
    getWines,
    wineByIdHandler,
    createWineHandler,
    deleteLogicHandler,
    deleteHandler,
    updateWineHandler
}