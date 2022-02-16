
 const { Product } = require('../models'); 
 
const productData = [
    {
     product_name: 'dragon katana',
     price: 359.99,
     stock: 2,
     product_descreption:'Samurai sword, Hand Forged Katana dragon handel',
     product_imag:'dragon katana.jpeg',
     category_id:1,
     user_id:1,
    },
    {
        product_name: 'Red Arima',
        price: 890,
        stock: 1,
        product_descreption:'Handmade Red Arima Clan Japanese Samurai Armor With Kuro Kuwagata Helmet, Life Size Armor Suit',
        product_imag:'Red Arima.jpeg',
        category_id:1,
        user_id:1,
    },
    {
        product_name: 'Wonder',
        price: 1800,
        stock: 1,
        product_descreption:'painting descripe the derams and subconscious and the heart of the wonder',
        product_imag:'wonder.jpeg',
        category_id:2,
        user_id:2,
    },
    {
        product_name: 'Ivory',
        price: 890,
        stock: 1,
        product_descreption:'12X12 Ivory Tea Magnolias Art Canvas',
        product_imag:'Ivory-Tea.jpeg',
        category_id:2,
        user_id:3,
    },
    {
        product_name: 'The Elephant',
        price: 890,
        stock: 1,
        product_descreption:'20.5"Wx9.5"Dx15.5"H. 13 lbs handmade sculptural side table ',
        product_imag:'AH225765_1.jpeg',
        category_id:3,
        user_id:3,
    },
    {
        product_name: 'Guitar',
        price: 1299,
        stock: 1,
        product_descreption:'Vintage Fender 1993 Stratocaster Solid Body Electric Guitar ',
        product_imag:'Guitar.jpeg',
        category_id:4,
        user_id:4,
    },

];

const seedProduct = () => productData.bulkCreate(productData);
module.exports = seedProduct