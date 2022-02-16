const router = require('express').Router();
const { Product } = require('../../models');
const { Category } = require('../../models');

router.get('/',(req,res)=>{
    Category.findAll({
        attributes:[
            'id',
            'category_name',
        ],
        include: [
            {
                model: Product,
                attributes:['id','product_name','price','stock','category_id']
            }
        ]
    })
    .then(catData => res.json(catData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
      where:{
        id: req.params.id
      },
      attributes:[
        'id',
        'category_name',
      ],
      // include Products association
      include:[
        {
          model:Product,
          attributes:['id','product_name','price','stock','category_id']
        }
      ]
    })
    .then(dbCatData => {
      if(!dbCatData) {
        res.status(400).json({message: 'The Category was no found with your rquest'});
        return
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  router.post('/', (req, res) => {
    // create a new category
    Category.create({
      category_name: req.body.category_name,
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  });
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body,{
      category_name: req.body.category_name,
      where:{
        id: req.params.id
      }
    })
    .then(dbCatData=>{
      if(!dbCatData[0]) { 
        res.status(404).json({messsage: 'Category was not found with your request'});
      return
      }
      res.json(dbCatData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
  
    });
  
  });

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
      where: { 
        id: req.params.id
      }
    })
    .then(dbCatData => {
      if(!dbCatData){
        res.status(404).json({message: 'Category was not found with your request'})
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
module.exports = router;