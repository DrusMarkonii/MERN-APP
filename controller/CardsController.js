const Controller = require("./Controller")
const CardService = require("../service/card.service")


class CardsController extends Controller {

    constructor() {
        const cardService = new CardService();
        super(cardService);
    }

    async getPages(){
        return await this.service.getPages(); 
    }

    async greatTry(req, res) {
        
        return await res.send("lio")
        

    }

    async getCardsList(req, res) {
        const totalPages = await this.getPages();
        const pages = Array.from({length: totalPages}, (_, i) => i + 1)

        await this.service.getCardsList(limit, skipIndex)
            .then(cardsList => {
                if (cardsList.length) {
                    const info = {pages, totalPages, cards: cardsList}
                    res.status(200).json(info);
                } else {
                    res.send("Медикаментов нет.")
                }
            })
            .catch(err => {
                res.status(500).send(err, {
                    message: "Ошибка получения списка медикаментов."
                });
            });
    }

    async getCardById(req, res) {
        const id = req.params.name;

        await this.service.getCardById(id)
            .then(card => {
                if (card) {
                    res.status(200).json(card);
                } else {
                    res.status(400).send("Card not found.")
                }
                
            })
            .catch(err => {
                res.status(500).send(err, {
                    message: "Ошибка поиска медикамента."
                });
            });
    }

    async removeCardById(req, res) {
        const id = req.params.id;

        await this.service.removeCardById(id)
            .then(() => {
                res.status(200).send('Медикамент удалён!');
            })
            .catch(err => {
                res.status(500).send(err, {
                    message: "Ошибка удаления медикамента."
                });
            });
    }
}

module.exports = CardsController