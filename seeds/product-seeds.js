const { Product } = require('../models'); 
const productData = [
    {
     product_name: 'dragon katana',
     price: 359.99,
     stock: 2,
     description:'Samurai sword, Hand Forged Katana dragon handel',
     image:'dragon katana.jpeg',
     category_id:1,
     seller_id:1,
    },
    {
        product_name: 'Red Arima',
        price: 890,
        stock: 1,
        description:'Handmade Red Arima Clan Japanese Samurai Armor With Kuro Kuwagata Helmet, Life Size Armor Suit',
        image:'Red Arima.jpeg',
        category_id:1,
        seller_id:1,
    },
    {
        product_name: 'Wonder',
        price: 1800,
        stock: 1,
        description:'painting descripe the derams and subconscious and the heart of the wonder',
        image:'wonder.jpeg',
        category_id:2,
        seller_id:2,
    },
    {
        product_name: 'Ivory',
        price: 890,
        stock: 1,
        description:'12X12 Ivory Tea Magnolias Art Canvas',
        image:'Ivory-Tea.jpeg',
        category_id:2,
        seller_id:3,
    },
    {
        product_name: 'The Elephant',
        price: 890,
        stock: 1,
        description:'20.5"Wx9.5"Dx15.5"H. 13 lbs handmade sculptural side table ',
        image:'AH225765_1.jpeg',
        category_id:3,
        seller_id:3,
    },
    {
        product_name: 'Guitar',
        price: 1299,
        stock: 1,
        description:'Vintage Fender 1993 Stratocaster Solid Body Electric Guitar ',
        image:'Guitar.jpeg',
        category_id:4,
        seller_id:4,
    },

];

const seedProduct = () => Product.bulkCreate(productData);
module.exports = seedProduct