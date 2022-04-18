const mongoose = require('mongoose');


const Plato = require('../models/Plato');

const platos = [
    {
        name: "Macarrones con tomate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBH8NLyOl4yhLrA8lumxNs07VC5iA5kBkag&usqp=CAU",
        description: "Estos macarrones con tomate casero son una receta sabrosa y a la vez muy sencilla, con el gustazo que supone preparar en casa tu propia salsa de tomate y dejarla a tu gusto. El toque aromático lo pone el orégano y como ingrediente opcional y especial verás cómo añadirle un poco de chorizo que incremente la potencia de sabor del plato.", 
        ingredients: "Macarrones, Cebolla, Tomate, Azucar, Aceite, Orégano, Chorizo, Sal"             
        
    },
    {
      name: "Pizza Margarita",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyF02_1Ul3lk9WWu_Tec7mnA80L3L5E24-Q&usqp=CAU",
      description: "Este tipo de pizza italiana esta formada por una masa de pizza napolitana como base y acompañada por 6 ingredientes solamente. Tan sencillo como un poco de tomate, queso mozzarella, albahaca fresca, sal, pimienta negra recién molida y aceite de oliva virgen extra. Es sin duda la pizza napolitana más popular.", 
      ingredients: "Masa de pizza, Queso mozzarella, Albahaca, Tomate, Sal, Pimienta negra, Aceite"             
      
    },
    {
      name: "Lubina al horno",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFozWaj4m7qqVrIx81x8AQtCLjUNspi05Ftg&usqp=CAU",
      description: "La lubina al horno es una exquisita receta de pescado que tanto te puede servir para una cena festiva como para tu menú cotidiano. Siempre queda bien y es sencilla de preparar. Esta lubina la hemos preparado con un lecho de patatas.", 
      ingredients: "Lubina, Patata, Cebolla, Aceite"             
      
    },
    {
      name: "Costillas con patatas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNklV_jcoJF8R403sA-Pe8jof7Xl9tygEeA&usqp=CAU",
      description: "Las patatas y la carne quedan tiernas y el caldo que las acompaña tiene mucho sabor gracias al sofrito que se prepara a base de ajos y cebolla. El aporte del pimentón o la carne del pimiento choricero y las hierbas aromáticas son el toque definitivo.", 
      ingredients: "Costillas de cerdo, Ajo, Cebolla, Patatas, Pimentón dulce, Romero, Tomillo, Aceite, Sal, Pimienta negra. "             
      
    },
    {
      name: "Canelones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGBkWq1Ek39Bt27yUVrTbja221Cluxm9VAg&usqp=CAU",
      description: "Los canelones son una pasta ancha de forma rectangular que se emplea a menudo en la cocina italiana para hacer platos con carne picada, pescado, verdura, requesón o espinacas en su interior. Se suele enrollar formando un cilindro.", 
      ingredients: "Carne de cerdo, Carne de ternera, Cebolla, Pimiento verde, Tomate, Placa de pasta, Queso, Bechamel, Mantequilla, Harina, Aceite, Leche, Sal"             
      
    },
]


const platoDocuments = platos.map(plato => new Plato(plato));


mongoose
  .connect('mongodb://localhost:27017/datos-restaurantes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allPlatos = await Plato.find();
		
		
    if (allPlatos.length) {
      await Plato.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Plato.insertMany(platoDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());