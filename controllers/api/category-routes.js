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
module.exports = router;