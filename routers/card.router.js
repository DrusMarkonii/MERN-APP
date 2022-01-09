const Router = require('express');
const mongoose = require('mongoose')
const CardsController = require('../controller/CardsController');
const Cards = require('../models/Card');

const cardsRouter = Router();

const cardsController = new CardsController();


// cardsRouter.get("/", cardsController.getCardList.bind(cardsController));
cardsRouter.get("/", async (req, res) => {
    const result = await Cards.find(
        {},
        {
          id: true,
          name: true,
          drugType: true,
          descriptionText: true,
        });

        console.log(result )
        res.send(result)
});

cardsRouter.get("/card/:id", async (req, res) => {
   
    const result = await this.Cards.findOne(
        { _id: id },
        {
          _id: true,
          name: true,
          descriptionText: true,
          drugType: true,
        }
      );
   res.send(result);
});




cardsRouter.get('/card/:id',cardsController.getCardById.bind(cardsController));
cardsRouter.delete('/card/:id', cardsController.removeCardById.bind(cardsController));  

module.exports = cardsRouter
