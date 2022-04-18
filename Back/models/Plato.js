const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const platoSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    image: { type: String, require: true },
    description: { type: String, required: true },  
    ingredients: { type: String, required: true },     
    
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo plato
const Plato = mongoose.model('Plato', platoSchema);
module.exports = Plato;