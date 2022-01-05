
const Card = require("../models/Card")

class CardService {

  async getCardsList(limit, skipIndex) {
    return await Card.find(
      {},
      {
        id: true,
        name: true,
        drugType: true,
        descriptionText: true,
      }
    ).limit(5).skip(skipIndex);
  }

  async getCardById(id) {
    return await Card.findOne(
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
    return await Card.remove({
      _id: id,
    });
  }
}

module.exports = CardService