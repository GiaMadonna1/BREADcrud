//Dependencies
const express = require ('express')

//COnfig
require('dotenv').config()
const PORT= process.env.PORT
const app= express()

//Routes
app.get('/', (req,res)=>{
    res.send('Welcome to An Awesome App about Breads!')
})

// BREADs
const BREADcrudController = require('./controllers/BREADcrud_conroller.js')
app.use('/BREADcrud', BREADcrudController)

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})