const express = require('express');

// const cors = require('cors')
// const app = express()


const Plato = require("../models/Plato");

const router = express.Router()

//Endpoint que trae todos los platos http://localhost:4000/platos
router.get('/', async (req, res) => {
	try {
		const platos = await Plato.find();
		return res.status(200).json(platos)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un plato por su nombre http://localhost:4000/platos/Macarrones%20con%20tomate
router.get('/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const platoByName = await Plato.find({ name: name });
		return res.status(200).json(platoByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un plato por su id http://localhost:4000/platos/platos/620bc7201e57b49d0f46d950
router.get('/platos/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const plato = await Plato.findById(id);
		if (plato) {
			return res.status(200).json(plato);
		} else {
			return res.status(404).json('No food plate found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para crear un plato nuevo
router.post('/create', async (req, res, next) => {
    try {
      
      const newPlato = new Plato({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        ingredients: req.body.ingredients 
		
      });
  
      
      const createdPlato = await newPlato.save();
      return res.status(201).json(createdPlato);
    } catch (error) {
          
      next(error);
    }
});

//Endpoint para eliminar un plato
router.delete('/:id', async (req, res, next) => {
    console.log("Entro en el delete");
    try {
        const {id} = req.params;
        
        await Plato.findByIdAndDelete(id);
        console.log("Hecho");
        return res.status(200).json('Plato deleted!');
    } catch (error) {
        console.log("Hay un error");
        return next(error);
    }
});

//Endpoint para editar un plato 
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const platoModify = new Plato(req.body) 
        platoModify._id = id 
        const platoUpdated = await Plato.findByIdAndUpdate(id , platoModify)
        return res.status(200).json(platoUpdated)
    } catch (error) {
        return next(error)
    }
});

module.exports = router;