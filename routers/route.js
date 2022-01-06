const Router = require('express')
const cardsRouter = require('./card.router')

const router = Router();


router.use('/all_cards', cardsRouter);

router.get('/', (req, res) => {
    res.send("home page");
})

module.exports = router