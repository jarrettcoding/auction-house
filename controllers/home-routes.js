const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Category, User} = require('../models');

// update the prices bu bidding 
router.put('/:id',(req,res)=> {
    Product.update({
        price: req.body.price,
        where:{
            id:req.params.id
        }
    })
    . then(newPrice => {
        if(newPrice !== Product.prices){
            res.status(404).json({ messsage: 'enter a valid value' })
        }
        res.json(newPrice)
})
.catch(err =>{
    console.log(err);
      res.status(500).json(err);
})
})