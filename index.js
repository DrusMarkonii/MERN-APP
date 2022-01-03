const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()


async function start() {
    try {
        await mongoose.connect('mongodb+srv://DrusMarkonii:298518422@cluster0.5fs8x.mongodb.net/collectionsDate?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
    } catch (e) {
        console.log('ERROR_____', e)
    }
    
    app.listen(PORT, () => {
        console.log(`Server has been started on PORT ${PORT}.....`)
    })
}

start()