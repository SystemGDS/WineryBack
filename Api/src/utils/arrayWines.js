const vinos = [
  {
      id: 12,
      name: "Estiba Reservada 1994",
      winery: "Catena Zapata",
      origin: "Argentina - Agrelo",
      detail:
        "The Estiba Reservada 1994 is a Red wine produced in Argentina - Agrelo. It originates from the renowned winery Catena Zapata, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
      category: "Red wine",
      stock: 4,
      price: 44,
      idReviews: [],
      banned: false,
    },
    {
      id: 495,
      name: "Almaviva 2010",
      winery: "Almaviva",
      origin: "Chile - Puente Alto",
      detail:
        "The Almaviva 2010 is a Rose wine produced in Chile - Puente Alto. It originates from the renowned winery Almaviva, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/VACKmZQ1RvemXT9ViEPFnQ_pb_x300.png",
      category: "Rose wine",
      stock: 1134,
      price: 3464,
      idReviews: [],
      banned: false,
    },
    {
      id: 66,
      name: "Cobos Volturno 2013",
      winery: "Viña Cobos",
      origin: "Argentina - Perdriel",
      detail:
        "The Cobos Volturno 2013 is a Red wine produced in Argentina - Perdriel. It originates from the renowned winery Viña Cobos, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      category: "Red wine",
      stock: 233,
      price: 540,
      idReviews: [],
      banned: false,
    },
    {
      id: 564,
      name: "Red 2010",
      winery: "Nosotros",
      origin: "Argentina - Agrelo",
      detail:
        "The Red 2010 is a Sparkling wine produced in Argentina - Agrelo. It originates from the renowned winery Nosotros, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/VxGqxhU0TqWmUqByG5gZiw_pb_x300.png",
      category: "Sparkling wine",
      stock: 95,
      price: 968,
      idReviews: [],
      banned: false,
    },
    {
      id: 75,
      name: "Cobos Volturno 2010",
      winery: "Viña Cobos",
      origin: "Argentina - Perdriel",
      detail:
        "The Cobos Volturno 2010 is a Red wine produced in Argentina - Perdriel. It originates from the renowned winery Viña Cobos, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      category: "Red wine",
      stock: 85,
      price: 431,
      idReviews: [],
      banned: false,
    },
    {
      id: 312,
      name: "Malbec Argentino 2003",
      winery: "Catena Zapata",
      origin: "Argentina - Mendoza",
      detail:
        "The Malbec Argentino 2003 is a White wine produced in Argentina - Mendoza. It originates from the renowned winery Catena Zapata, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/K2Ui4ULxQd2S3jcrgwmxYQ_pb_x300.png",
      category: "White wine",
      stock: 13,
      price: 43,
      idReviews: [],
      banned: false,
    },
    {
      id: 8,
      name: "Hurlo 2009",
      winery: "Garbole",
      origin: "Italy - Veneto",
      detail:
        "The Hurlo 2009 is a Red wine produced in Italy - Veneto. It originates from the renowned winery Garbole, known for its dedication and expertise in crafting quality wines.",
      image:
        "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
      category: "Red wine",
      stock: 26,
      price: 55,
      idReviews: [],
      banned: false,
    },
]

const nuevoArrayVinos = [ 
{
  
  name: "Marimar Estate Rosaleda Pinot Noir 2019",
  winery: "Bodega Marimar Estate",		
  origin: "United states",
  price: 10,
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/861/458/products/338101-6b2965fbd31f7029af15743667545807-640-0.webp",
   category: "Rose Wine"
},
{
  
  name: "Barefoot White Zinfandel 2011",
  winery: "Barefoot Cellars",		
  origin: "United states",
  price: 7,
  image: "https://www.mrvinos.com/data/vinos/40568/barefoot-white-zinfandel-660697-s453_p.jpg",
   category: "Rose Wine"
},

{
  
  name: "Marchiori & Barraud Syrah Rosé 750ml",
  winery:"Rose Wine"	,	
  origin: "Argentina",
  price: 5,
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/861/458/products/3307571-b81c61340509dda57716627509277876-640-0.webp",
   category: "Rose Wine"
},
{
  
  name: "Chakana Rose Malbec 2017",
  winery: "Bodega Chakana",		
  origin: "Argentina",
  price: 9,
  image: "https://www.mrvinos.com/data/vinos/41597/chakana-rose-malbec-1446005-s438_p.jpg",
   category: "Rose Wine"
},
{
  
  name: "Rosat 2019",
  winery: "Bodegas Cal Cabo",		
  origin: "Spain",
  price: 7,
  image: "https://www.mrvinos.com/data/vinos/42726/111-rosat-1684514-s313_e.jpg",
   category: "Rose Wine"
},
{
  
  name: "12 Lunas Rosado 2020",
  winery:"Bodega 12 Lunas",		
  origin: "Spain",
  price: 9,
  image: "https://www.mrvinos.com/data/vinos/52169/12-lunas-rosado-1756359-s765_e.jpg",
   category: "Rose Wine"
},

{
  
  name: "A Mano Rosato 2017",
  winery: "	Bodega A Mano",		
  origin: "Italy",
  price: 11,
  image: "https://www.mrvinos.com/data/vinos/31089/a-mano-rosato-1385688-s372_p.jpg",
  category: "Rose Wine"
},
{
  
  name: "Altura Rossetto 2016",
  winery: "Bodega Altura",		
  origin: "Italy",
  price: 21,
  image: "https://www.mrvinos.com/data/vinos/25339/altura-rossetto-1322393-s475_p.jpg",
  category: "Rose Wine"
},
{
  
  name: "Charles Melton Rose Of Virginia Barossa Valley 2018",
  winery: "Bodega Charles Melton",		
  origin: "Australia",
  price: 22,
  image: "https://www.mrvinos.com/data/vinos/41061/charles-melton-rose-of-virginia-barossa-valley-1463629-s372_p.jpg",
   category: "Rose Wine"
},
{
  
  name: "Grant Burge Gb11 Rose 2014",
  winery: "	Bodega Grant Burge",		
  origin: "Australia",
  price: 9,
  image: "https://www.mrvinos.com/data/vinos/41003/grant-burge-gb11-rose-1284417-s372_p.jpg",
   category: "Rose Wine"
},
{
  
  name: "Onna Panevino",
  winery: "Lieviti",		
  origin: "Italy",
  price: 10,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/o/n/onna-panevino.jpg",
   category: "Red Wine"
},
{
  
  name: "Barbacarlo Lino Maga",
  winery: "Anatta",		
  origin: "Italy",
  price: 7,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/b/a/barbacarlo-lino-maga-2020.jpg",
   category: "Red Wine"
},

{
  
  name: "Sangiovese Massa Vechial",
  winery:"Sangiovesetti"	,	
  origin: "Italy",
  price: 5,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/m/a/massa-vecchia-sangiovese-2019.jpg",
   category: "Red Wine"
},
{
  
  name: "Gattorosso Sagona",
  winery: "Canaiolo",		
  origin: "Italy",
  price: 9,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/g/a/gattorosso-sagona.jpg",
   category: "Red Wine"
},
{
  
  name: "Vinotte Sagona",
  winery: "Trebbiano",		
  origin: "Italy",
  price: 7,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/v/i/vi-notte-sagona.jpg",
   category: "White Wine"
},
{
  
  name: "Primi Passi Sagona",
  winery:"Trebbiano",		
  origin: "Italy",
  price: 9,
  image: "https://www.gallienoteca.it/pub/media/catalog/product/cache/2fc7ad683bc494c78ae37ebaf09050b5/p/r/primi-passi-sagona.jpg",
   category: "White Wine"
},

{
  
  name: "Royal One – Gran Reserva",
  winery: "Royal One",
  origin: "Chile",
  price: 11,
  image: "https://cdn.shopify.com/s/files/1/0472/5584/7080/products/ROYAL-ONE_180x.png?v=1680806004",
  category: "Red Wine"
},
{
  
  name: "Gatos Locos",
  winery: "Bodega Angosta",		
  origin: "Chile",
  price: 21,
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/384/833/products/4-gatos-locos-malbec1-da76b7f85a9d2da98d16572105682944-320-0.png",
  category: "Red Wine"
},
{
  
  name: "Achaval Ferrer Malbec",
  winery: "Bodega Angosta",		
  origin: "Chile",
  price: 22,
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/384/833/products/achaval-ferrer-malbec1-7a1a70ce07a574875116639652557636-320-0.png",
   category: "Red Wine"
},
{
  
  name: "Sunal Salvaje",
  winery: "Bodega Angosta",		
  origin: "Chile",
  price: 9,
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/384/833/products/sunal-salvaje1-85e922a3f9dbf7fcf216100411698576-320-0.png",
   category: "Red Wine"
},

{
  name: "Pétrus 2000",
  winery: "Romanee-Conti",
  origin: "France",
  price: 10,
  image: "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_600x600.png",
  category:"White wine",
  },
  {
  name: "Scharzhofberger Riesling Auslese",
  winery: "Egon muller",
  origin: "Germany",
  price: 22,
  image:"https://bestofwines.com/wine-images/33024_big.webp",
  category: "White wine",
  },
  
  {
  name: "VDP de l'Herault Blanc",
  winery: "Domaine de la Grange des Peres",
  origin: "France",
  price: 16,
  image:"https://bestofwines.com/wine-images/30008_big.webp",
  category: "White wine",
  },
  
  {
  name: "Herault Blanc 2018",
  winery: "Domaine de la grange des peres",
  origin: "France",
  price: 15,
  image:"https://bestofwines.com/wine-images/27819_big.webp",
  category:"White wine",
  },
  {
  name: "Herault Blanc slightly bin soiled label 2015",
  winery: "Domaine de la grange des peres",
  origin: "France",
  price: 10,
  image:"https://bestofwines.com/wine-images/30090_big.jpg",
  category:"White wine",
  },
  {
  name: "Blanc slightly bin soiled label 2015",
  winery: "Cru Classe",
  origin: "Roussillon",
  price: 23,
  image:"https://bestofwines.com/wine-images/30090_big.webp",
  category: "White wine",
  },
  
  {
  name: "Ritchie Chardonnay 2005",
  winery: "Aubert",
  origin: "United states",
  price: 10,
  image: "https://bestofwines.com/wine-images/32413_big.webp",
  category: "White wine",
  },
  {
  name: "Ritchie Chardonnay 2004 (Magnum)",
  winery: "Aubert",
  origin: "United states",
  price: 10,
  image: "https://bestofwines.com/wine-images/32412_big.webp",
  category: "White wine",
  },
  {
  name: "Chevalier Montrachet 2019",
  winery: "La pousse d'or",
  origin: "France",
  price: 10,
  image:"https://bestofwines.com/wine-images/25962_big.webp",
  category: "White wine",
  },
  {
    name:"Baron b brut nature",
    winery:"Chandon",
    origin:"France",
    price: 85,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01302048-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Baron b extra brut",
    winery:"Chandon",
    origin:"France",
    price:64,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01302024-1.webp",
    category: "Sparkling wine"
  }, {
    name:"Bressia royale brut bature",
    winery:"Chandon",
    origin:"France",
    price:11,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03502022-1.webp",
    category:"Sparkling wine"
  }, {
    name:"Casa boher",
    winery:"Chandon",
    origin:"France",
    price:6,
    image:"https://www.debarricas.com.ar/wp-content/uploads/02202006-1.webp",
    category:"Sparkling wine"
  }, {
    name:"Chakana ayni rose nature pinot",
    winery:"Chakana",
    origin:"United states",
    price:10,
    image:"https://www.debarricas.com.ar/wp-content/uploads/02601056-1.webp",
    category: "Sparkling wine"
  }, {
    name:"Cruzat cuvee",
    winery:"Cruzat brut",
    origin:"Italy",
    price:55,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06002001-1.webp",
    category:"Sparkling wine"
  }, {
    name:"Cruzat Premier",
    winery:"Chandon",
    origin:"Argentina",
    price:45,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06002004-1.webp",
    category:"Sparkling wine"
  }, {
    name:"Ernesto C. animal extra brut",
    winery:"Animal",
    origin:"Chile",
    price:3,
    image:"https://www.debarricas.com.ar/wp-content/uploads/07102022-1.webp",
    category:"Sparkling wine"
  }, {
    name:"La linda",
    winery:"La salteña",
    origin:"Argentina",
    price:40,
    image:"https://www.debarricas.com.ar/wp-content/uploads/05902034-1.webp",
    category: "Sparkling wine"
  }, {
    name:"Las perdices brut nature nuit",
    winery:"Rosario de nuit",
    origin:"Spain",
    price:8,
    image:"https://www.debarricas.com.ar/wp-content/uploads/02602128-1.webp",
    category: "Sparkling wine"
  }, {
    name:"Navarro C. Dulcet",
    winery:"Correas",
    origin:"Chile",
    price:34,
    image:"https://www.debarricas.com.ar/wp-content/uploads/04902152-1.webp",
    category: "Sparkling wine"
  }, {
    name:"Nieto S. Grand cuvee brut nat",
    winery:"Express",
    origin:"Germany",
    price:58,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06702022-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Nieto S.",
    winery:"Express",
    origin:"Germany",
    price:17,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06702029-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Rosell boher grand cuvee",
    winery:"JavaScript",
    origin:"Italy",
    price:18,
    image:"https://www.debarricas.com.ar/wp-content/uploads/02202001-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Salentein Blanc De Blancs",
    winery:"La bamba",
    origin:"Spain",
    price:35,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01501029-1.webp",
    category: "Sparkling wine"
  },
  {
    name:"Sapo de otro pozo",
    winery:"Caballeros de la quema",
    origin:"Argentina",
    price:36,
    image:"https://www.debarricas.com.ar/wp-content/uploads/02902023-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Vicentin colossal",
    winery:"Champagne noise",
    origin:"Spain",
    price:32,
    image:"https://www.debarricas.com.ar/wp-content/uploads/08202048-1.webp",
    category: "Sparkling wine"
  },
  {
    name:"Zuccardi alma 4 bonarda",
    winery:"Almaviva",
    origin:"Chile",
    price:56,
    image:"https://www.debarricas.com.ar/wp-content/uploads/05302039-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Zaha calcaire",
    winery:"Nature",
    origin:"Italy",
    price:60,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03602027-1.webp",
    category:"Sparkling wine"
  },
  {
    name:"Luigi bosca cabernet",
    winery:"Sauvignon",
    origin:"Italy",
    price:51,
    image:"https://www.debarricas.com.ar/wp-content/uploads/05901038-1.webp",
    category:"Red wine",
  },
  {
    name:"Maal wines Clarete malbec",
    winery:"NN",
    origin:"Argentina",
    price:38,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06301013-1.webp",
    category:"Red wine",
  },
  {
    name:"Maal biutiful",
    winery:"NN",
    origin:"Argentina",
    price:40,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06301008-1.webp",
    category:"Red wine",
  },
  {
    name:"D.V. Catena tinto",
    winery:"Historico bonarda",
    origin:"Italy",
    price:82,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01401113-1.webp",
    category:"Red wine",
  },
  {
    name:"Ernesto C.",
    winery:"Criolla",
    origin:"France",
    price:3,
    image:"https://www.debarricas.com.ar/wp-content/uploads/07101063-1.webp",
    category:"Red wine",
  },
  {
    name:"Los cardones",
    winery:"Flor cardon",
    origin:"Spain",
    price:41,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03601051-1.webp",
    category:"Red wine",
  },
  {
    name:"Estiba Reservada 1994",
    winery:"Catena Zapata",
    origin:"Argentina",
    price:14,
    image:"https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
    category:"Red wine", 
  },
  {
    name: "Almaviva 2010",
    winery: "Almaviva",
    origin: "Chile",
    image:
      "https://images.vivino.com/thumbs/VACKmZQ1RvemXT9ViEPFnQ_pb_x300.png",
    category: "Red wine",
    price: 64,
  },
  {
    name: "Cobos Volturno 2013",
    winery: "Viña Cobos",
    origin: "Argentina",
    image:
      "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
    category: "Red wine",
    price: 54,
  },
  {
    name: "Red 2010",
    winery: "Nosotros",
    origin: "Argentina",
    image:
      "https://images.vivino.com/thumbs/VxGqxhU0TqWmUqByG5gZiw_pb_x300.png",
    category: "Red wine",
    price: 96,
  },
  {
    name: "Malbec Argentino 2003",
    winery: "Catena Zapata",
    origin: "Argentina",
    image:
      "https://images.vivino.com/thumbs/K2Ui4ULxQd2S3jcrgwmxYQ_pb_x300.png",
    category: "Red wine",
    price: 43,
  },
  {
    name: "Hurlo 2009",
    winery: "Garbole",
    origin: "Italy",
    image:
      "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
    category: "Red wine",
    price: 55
  },
  {
    name:"El Esteco blanc de noir",
    winery:"Pinot noar",
    origin:"France",
    price:61,
    image:"https://www.debarricas.com.ar/wp-content/uploads/04901067-1.webp",
    category:"White wine", 
  },
  {
    name:"Terrazas RVA Chardonnay",
    winery:"Terrazas 3030",
    origin:"United states",
    price:30,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01301030-1.webp",
    category:"White wine", 
  },
  {
    name:"Riccitelli torrontes",
    winery:"The apple",
    origin:"Italy",
    price:43,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03601013-1.webp",
    category:"White wine", 
  },
  {
    name:"Tapiz Clasico Blanc",
    winery:"Sauvignon",
    origin:"Chile",
    price:26,
    image:"https://www.debarricas.com.ar/wp-content/uploads/07301092-1.webp",
    category:"White wine", 
  },
  {
    name:"Cadus vista Chardonnay",
    winery:"Cadus flores",
    origin:"Australia",
    price:85,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06701012-1.webp",
    category:"White wine", 
  },
  {
    name:"Riccitelli blanco de la casa",
    winery:"Escobar",
    origin:"United states",
    price:45,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03601037-1.webp",
    category:"White wine", 
  },
  {
    name:"Don nicanor gewurztraminer",
    winery:"Shina",
    origin:"Germany",
    price:38,
    image:"https://www.debarricas.com.ar/wp-content/uploads/06701069-1.webp",
    category:"White wine", 
  },
  {
    name:"Ernesto C. Blanco",
    winery:"Express",
    origin:"Italy",
    price:16,
    image:"https://www.debarricas.com.ar/wp-content/uploads/07101043-1.webp",
    category:"White wine", 
  },{
    name:"Hey rose",
    winery:"Riccitelli",
    origin:"Italy",
    price:43,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03601042-1.webp",
    category:"Rose wine", 
  },{
    name:"Louis rouederer rose",
    winery:"Chardonnay brut",
    origin:"France",
    price:103,
    image:"https://www.debarricas.com.ar/wp-content/uploads/01102071-1.webp",
    category:"Rose wine", 
  },{
    name:"Pamela David Mel",
    winery:"Henry winery",
    origin:"Argentina",
    price:33,
    image:"https://www.debarricas.com.ar/wp-content/uploads/03901002-1.webp",
    category:"Rose wine", 
  },
  {
    name: "Reserva Dorada 2003",
    winery: "La dorada",
    image: "https://cdn.shopify.com/s/files/1/0927/7066/products/yA0VQwHROPu9FirV2JBQ_santantonitorredelhomenatge_P1B2222_678x.jpg?v=1610234631",
    category: "Red wine",
    origin: "Perú",
    price: 53,
    //: 15
  },
  {
    name: "Malbec Especial 2012",
    winery: "Henry winery",
    image: "https://vinea.pe/wp-content/uploads/2020/06/Casarena-DNA-Malbec-2012-750ml.jpg",
    category: "Red wine",
    origin: "Argentina",
    price: 39,
    //: 15
  },
  {
    name: "Carmenere Elegante 2015",
    winery: "Henry winery",
    image: "https://dojiw2m9tvv09.cloudfront.net/35715/product/veo-ultima-cr-20192273.png",
    category: "Red wine",
    origin: "Chile",
    price: 41,
    //: 15
  },
  {
    name: "Gran Blanco 2017",
    winery: "Henry winery",
    image: "https://oechsle.vteximg.com.br/arquivos/ids/1348257-1000-1000/image-1d66bd69d82741e3bef2b7c2d6f5fe55.jpg?v=637494399195400000",
    category: "White wine",
    origin: "Perú",
    price: 33,
    //: 15
  },
  {
    name: "Syrah Intenso 2010",
    winery:"Henry winery",
    image: "https://kahanlicores.pe/cdn/shop/products/369_1024x1024.jpg?v=1588459318",
    category: "Red wine",
    origin: "Argentina",
    price: 57,
    //: 15
  },
  {
    name: "Sauvignon Blanc Radiante 2016",
    winery: "Henry winery",
    image: "https://wongfood.vtexassets.com/arquivos/ids/379979/415503-01-2226.jpg?v=637356600336470000",
    category: "White wine",
    origin: "Chile",
    price: 30,
    //: 15
  },
  {
    name: "Tannat Poderoso 2009",
    winery: "Henry winery",
    image: "https://4.bp.blogspot.com/-EhaaNgWU018/UITSNSnlkaI/AAAAAAAAAeo/KcgFn_iDInA/s1600/Rosado+Tannat+Gim%C3%A9nez+M%C3%A9ndez.jpg",
    category: "Red wine",
    origin: "Perú",
    price: 47,
    //: 15
  },
  {
    name: "Bonarda Suave 2014",
    winery: "Henry winery",
    image: "https://www.aponticia.es/images/vinos-1676022677.jpg",
    category: "Red wine",
    origin: "Argentina",
    price: 29,
    //: 15
  },
  {
    name: "Chardonnay Fresco 2018",
    winery: "Henry winery",
    image: "https://wongfood.vtexassets.com/arquivos/ids/575441-800-auto?v=637979315443800000&width=800&height=auto&aspect=true",
    category: "White wine",
    origin: "Chile",
    price: 35,
    //: 15
  },
  {
    name: "Rosado Delicado 2013",
    winery: "Henry winery",
    image: "https://imagenes.elpais.com/resizer/BBDMgqRxiCiSLnBJG2mJiAcLcic=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/D47O3GMTERSZBBPNCZ76SBM4CE.jpg",
    category: "Rose wine",
    origin: "Perú",
    price: 31,
    //: 15
  }
]


const nuevosVinosProvisionales = nuevoArrayVinos.map(vino => {
return {
  name: vino.name,
  winery: vino.winery,
  image: vino.image,
  category: vino.category,
  origin: vino.origin,
  detail: `The ${vino.name} is a ${vino.category} produced in ${vino.origin}. It originates from the renowned winery ${vino.winery}, known for its dedication and expertise in crafting quality wines.`,
  stock: 10,
  price: vino.price

}
})

module.exports = {nuevosVinosProvisionales}