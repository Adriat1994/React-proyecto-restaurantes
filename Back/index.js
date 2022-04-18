const express = require('express');
const cors = require('cors')

require("./utils/db");


const Restaurant = require("./models/Restaurant");
const Plato = require("./models/Plato");

const restaurantRoutes = require("./routes/restaurant.routes");
const platoRoutes = require("./routes/plato.routes");


const PORT = 4000;
const server = express();
const router = express.Router();

server.use(cors(
	{
		application: {
			cors: {
				server: [
					{
						origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
						credentials: true
					}
				]
			}
	}}
));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


//Ruta para ver todos los restaurantes http://localhost:4000/restaurants
server.use("/restaurants", restaurantRoutes);

//Ruta para ver todos los platos http://localhost:4000/platos
server.use("/platos", platoRoutes);

server.use('*', (req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
  });

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});