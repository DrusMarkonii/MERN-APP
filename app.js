const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const PORT = config.get('port') || 5000

const authRout = require('./routers/auth.routes')

const app = express()

app.use('/api/auth', authRout)


async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        })
        .then(() =>  console.log('MongoDB has started...'))

        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}.....`)
        })
       
    } catch (e) {
        console.log('ERROR_____', e.message)
        process.exit(1)
    }
    
}

start()

