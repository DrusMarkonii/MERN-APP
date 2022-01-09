// const Card = require("../models/Card")

class CardService {

  constuctor() {
    this.cards = require("../models/Card")
  }

  async getCardsList() {
    return await this.cards.find(
      {},
      {
        id: true,
        name: true,
        drugType: true,
        descriptionText: true,
      }
    );
  }

  async getCardById(id) {
    return await this.cards.findOne(
      { _id: id },
      {
        _id: true,
        name: true,
        descriptionText: true,
        drugType: true,
      }
    );
  }

  async removeCardById(id) {
    return await this.cards.remove({
      _id: id,
    });
  }
}

module.exports = CardService