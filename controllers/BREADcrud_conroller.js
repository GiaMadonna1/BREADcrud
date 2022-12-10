const express = require('express')
const BREADcrud = express.Router()
const Bread = require('../models/bread.js')

// INDEX
BREADcrud.get('/', (req,res)=> {
    res.send(Bread)
})

//SHOW
BREADcrud.get('/:arrayIndex', (req,res)=>{
    res.send(Bread[req.params.arrayIndex])
})

module.exports = BREADcrud

