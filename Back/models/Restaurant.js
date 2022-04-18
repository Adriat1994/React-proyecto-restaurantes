const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    image: { type: String, require: true },
    description: { type: String, required: true },    
    location: { type: String, required: true },    
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo restaurante
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;