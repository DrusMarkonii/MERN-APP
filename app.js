const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const  route  = require('./routers/route')
const PORT = config.get('port') || 5000
const cors = require('cors')



const app = express()

app.use(cors())
app.use(express.json());


app.use('/api', route)

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
        console.log('ERROR_____', message)
        process.exit(1)
    }
    
}

start()

