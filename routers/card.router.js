const Router = require('express');
const CardsController = require('../controller/CardsController');

const cardsRouter = Router();

const cardsController = new CardsController();

cardsRouter.get("/all_cards", cardsController.getCardsList.bind(cardsController));
cardsRouter.get('/card/:id', cardsController.getCardById.bind(cardsController));
cardsRouter.delete('/card/:id', cardsController.removeCardById.bind(cardsController));

module.exports = cardsRouter
