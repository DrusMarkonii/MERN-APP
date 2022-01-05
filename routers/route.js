const Router = require('express')
const cardsRouter = require('./card.router')

const router = Router();

router.use('/card', cardsRouter);

router.get('/', (req, res) => {
    res.send("home page");
})

module.exports = router