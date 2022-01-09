const Controller = require("./Controller")
const CardsService = require("../service/card.service")


class CardsController extends Controller {

    constructor() {
        const cardsService = new CardsService();
        super(cardsService);
    }
    
    async getCardList(req, res) {
        await this.service.getCardList()
            .then(cardList => {
                console.log(cardList)
                res.status(200).json(cardList);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        (err).message || "ERROR"
                });
            });
    }

    async getCardById(req, res) {
        const id = req.param.id;

        await this.service.getCardById(id)
            .then(card => {
                    res.status(200).json(card);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        (err).message || "ERROR"
                });
            });
    }

    async removeCardById(req, res) {
        const id = req.param.id;

        await this.service.removeCardById(id)
            .then(() => {
                res.status(200).send('Delete');
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        (err).message || "ERROR"
                });
            });
    }
}  

module.exports = CardsController