const Router = require('express');
const Cards = require('../models/Card');

const cardsRouter = Router();

cardsRouter.get("/", async (req, res) => {
  const result = await Cards.find(
    {},
    {
      _id: true,
      name: true,
      drugType: true,
      descriptionText: true,
    });

    res.send(result)
})

cardsRouter.get("/card/:id", async (req, res) => {
  const path = req.path.split('/')
  const name = path[2]
  
  const result = await Cards.findOne(
      {name: name},
      {
        _id: true,
        name: true,
        drugType: true,
        descriptionText: true,
      });

      res.send(result)
});

cardsRouter.delete("/card/:id", async (req, res) => {
  const path = req.path.split('/')
  const name = path[2]
  
  const result = await Cards.deleteOne(
      {name: name},
      {
        _id: true,
        name: true,
        drugType: true,
        descriptionText: true,
      });

      res.send(result)
});

// cardsRouter.get("/card/:id", async (req, res) => {
//   // const path = req.path.split('/')
//   // const id = path[2]

// //  async function getOne(id) {
//     const result = await this.Cards.find(
//       {},
//       {
//         _id: true,
//         name: true,
//         descriptionText: true,
//         drugType: true,
//       }
//     );

//     // return result
//   // }
  
//   res.send(result);
// });




// cardsRouter.get('/card/:id',cardsController.getCardById.bind(cardsController));
// cardsRouter.delete('/card/:id', cardsController.removeCardById.bind(cardsController));  

module.exports = cardsRouter
