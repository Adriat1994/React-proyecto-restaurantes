const express = require('express');

// const cors = require('cors')
// const app = express()


const Restaurant = require("../models/Restaurant");

const router = express.Router()

//Endpoint que trae todos los restaurantes http://localhost:4000/restaurants
router.get('/', async (req, res) => {
	try {
		const restaurants = await Restaurant.find();
		return res.status(200).json(restaurants)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un restaurante por su nombre http://localhost:4000/restaurants/Casa%20Paco
router.get('/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const restaurantByName = await Restaurant.find({ name: name });
		return res.status(200).json(restaurantByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un restaurante por su id http://localhost:4000/restaurants/restaurants/620bfb0e6abc0c84ff8f4cab
router.get('/restaurants/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const restaurant = await Restaurant.findById(id);
		if (restaurant) {
			return res.status(200).json(restaurant);
		} else {
			return res.status(404).json('No restaurant found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para crear un restaurante nuevo
router.post('/create', async (req, res, next) => {
    try {
      
      const newRestaurant = new Restaurant({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        location: req.body.location,
		
      });
  
      
      const createdRestaurant = await newRestaurant.save();
      return res.status(201).json(createdRestaurant);
    } catch (error) {
          
      next(error);
    }
});

//Endpoint para eliminar un restaurante
router.delete('/:id', async (req, res, next) => {
    console.log("Entro en el delete");
    try {
        const {id} = req.params;
        
        await Restaurant.findByIdAndDelete(id);
        console.log("Hecho");
        return res.status(200).json('Restaurant deleted!');
    } catch (error) {
        console.log("Hay un error");
        return next(error);
    }
});

//Endpoint para editar un restaurante 
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const restaurantModify = new Restaurant(req.body) 
        restaurantModify._id = id 
        const restaurantUpdated = await Restaurant.findByIdAndUpdate(id , restaurantModify)
        return res.status(200).json(restaurantUpdated)
    } catch (error) {
        return next(error)
    }
});



module.exports = router;