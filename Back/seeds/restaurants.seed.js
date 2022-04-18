const mongoose = require('mongoose');


const Restaurant = require('../models/Restaurant');

const restaurants = [
    {
        name: "Casa Paco",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1d22ei8AE5kr2OyqKLRWtBQlrmJ-xtWtEg&usqp=CAU",
        description: "Si vienes a vernos encontrarás una gran variedad de tortillas de patata con diferentes ingredientes entre las que seguro encuentras tu favorita, una selección de croquetas de diversos sabores y raciones de platos típicos siempre elaborados con productos de calidad.",        
        location: "https://www.google.com/maps/place/Restaurante+Casa+Paco/@40.380695,-3.7799409,13z/data=!4m9!1m2!2m1!1scasa+paco!3m5!1s0xd422878b79b31b1:0xa5088ed446a46da3!8m2!3d40.4139322!4d-3.7085126!15sCgljYXNhIHBhY29aCyIJY2FzYSBwYWNvkgEKcmVzdGF1cmFudA",      
        
    },
    {
      name: "El Antoju",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xU9QRek051TVmq3lfitroHzgGqWloDmVXw&usqp=CAU",
      description: "Amplia sidrería familiar de rústico aire actual que sirve cachopo, fabada, chuletón y otras recetas del norte.",        
      location: "https://www.google.com/maps/place/Sidrer%C3%ADa+El+Antoju+Madrid/@40.4055624,-3.8905602,17z/data=!3m1!4b1!4m5!3m4!1s0xd418ff59f86f0dd:0x8e30a435054731aa!8m2!3d40.4055835!4d-3.8883733?hl=es",      
      
    },
    {
      name: "Salmon Guru",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uIjeozCgaSgW5XeI9ktv23isW5hC7ftrrQ&usqp=CAU",
      description: "Platos internacionales innovadores acompañados de creativos cócteles en un bar de iluminación tenue y estilo retro.",        
      location: "https://www.google.com/maps?q=salmon+guru&bih=969&biw=1920&hl=es&sxsrf=APq-WBuD2VvyCNjurTgn20dgIanRWr8Y_w:1644951730690&gs_lcp=Cgdnd3Mtd2l6EAEYADIOCC4QgAQQsQMQxwEQrwEyBQgAEIAEMgUIABDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABDLATIFCAAQgAQ6BggjECcQEzoECCMQJzoKCC4QxwEQrwEQQzoLCAAQgAQQsQMQgwE6FAguEIAEELEDEIMBEMcBEKMCENQCOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6EQguEIAEELEDEIMBEMcBENEDOgQILhAnOgoILhDHARCvARAnOgQIABBDOhMILhCxAxCDARDHARCjAhDUAhBDOgoILhDHARCjAhBDOg4ILhCABBCxAxCDARDUAjoFCC4QgAQ6CAguEIAEELEDOgsILhCABBCxAxDUAjoHCAAQChDLAUoECEEYAEoECEYYAFAAWJUSYNIbaABwAXgAgAGTAYgB0wqSAQQwLjExmAEAoAEBwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjU5ryms4L2AhWNHewKHWN2AIYQ_AUoAnoECAEQBA",      
      
    },
    {
      name: "El Horno Azul",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdmAhmHo5YRwFDO2PUoBeNSmhQY3N0qbzTw&usqp=CAU",
      description: "Desde en 2012 y situada en pleno centro de Madrid, en la calle Leganitos, muy cerca de la Plaza de España y Gran Vía. Con una carta de 13 pizzas elaboradas de manera totalmente artesanal, desde nuestra masa hecha con harinas italianas hasta la cocción en  auténtico horno de piedra, pasando por la salsa de tomate 100% natural, una rica mozzarella y los mejores ingredientes frescos.",        
      location: "https://www.google.com/maps/place/El+Horno+Azul+Pizzer%C3%ADa/@40.4216494,-3.71221,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287b2704e067:0x33859cceb54b9902!8m2!3d40.4216494!4d-3.7100213?hl=es",      
      
    },
    {
      name: "BIENMESABE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cMJ-6onODhPdDcDBI_m8RmOBJUdsUCOUuQ&usqp=CAU",
      description: "Nuestro local situado en el barrio de Salamanca cuenta con una terraza semicubierta que da a la calle con mesas altas, más informal, así como una cómoda y amplia barra que da paso a un salón para los que prefieren una atmósfera más tranquila.",        
      location: "https://www.google.com/maps/place/Bienmesabe+Vergara/@40.3806791,-3.8149614,12z/data=!3m1!5s0xd4228be62c8f9ad:0x60d53a745d6a6449!4m9!1m2!2m1!1sbienmesabe+madrid!3m5!1s0xd4228be7e6612f1:0x6635c5677ef540f7!8m2!3d40.4291815!4d-3.6800406!15sChFiaWVubWVzYWJlIG1hZHJpZCIDiAEBWhMiEWJpZW5tZXNhYmUgbWFkcmlkkgEKcmVzdGF1cmFudA",      
      
    },
]


const restaurantDocuments = restaurants.map(restaurant => new Restaurant(restaurant));


mongoose
  .connect('mongodb://localhost:27017/datos-restaurantes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allRestaurants = await Restaurant.find();
		
		
    if (allRestaurants.length) {
      await Restaurant.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Restaurant.insertMany(restaurantDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());