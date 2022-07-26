const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

const connDB = require('./config/dbConn')
connDB()

app.use(express.json())

app.use('/player', require('./routes/players'))
app.use('/club', require('./routes/club'))

mongoose.connection.once('open', ()=>{
    console.log('DB connected')
    app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})
})