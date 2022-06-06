const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 4000

app.use(cors())

const crops = {

    'blue-jazz': {
        'season': 'spring',
        'days-to-grow': 7,
        'regrowth': false,
        'cost': '30g',
        'sell-price': '50g',
        'type': 'flower'
    },

    'cauliflower': {
        'season': 'spring',
        'days-to-grow': 12,
        'regrowth': false,
        'cost': '80g',
        'sell-price': '175g',
        'type': 'vegetable'
    },

    'coffee-bean': {
        'season': 'spring',
        'days-to-grow': 10,
        'regrowth': 2,
        'cost': '2500g',
        'sell-price': '15g',
        'type': 'coffee'
    },

    'garlic': {
        'season': 'spring',
        'days-to-grow': 4,
        'regrowth': false,
        'cost': '40g',
        'sell-price': '60g',
        'type': 'spice'
    },

    'green-bean': {
        'season': 'spring',
        'days-to-grow': 10,
        'regrowth': 3,
        'cost': '60g',
        'sell-price': '40g',
        'type': 'vegetable'
    },

    'kale': {
        'season': 'spring',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '70g',
        'sell-price': '110g',
        'type': 'vegetable'
    },

    'parsnip': {
        'season': 'spring',
        'days-to-grow': 4,
        'regrowth': false,
        'cost': '20g',
        'sell-price': '35g',
        'type': 'vegetable'
    },

    'potato': {
        'season': 'spring',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '50g',
        'sell-price': '80g',
        'type': 'vegetable'
    },

    'rhubarb': {
        'season': 'spring',
        'days-to-grow': 13,
        'regrowth': false,
        'cost': '100g',
        'sell-price': '220g',
        'type': 'vegetable'
    },

    'strawberry': {
        'season': 'spring',
        'days-to-grow': 8,
        'regrowth': 4,
        'cost': '100g',
        'sell-price': '120g',
        'type': 'fruit'
    },

    'tulip': {
        'season': 'spring',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '20g',
        'sell-price': '30g',
        'type': 'flower'
    },

    'unmilled-rice': {
        'season': 'spring',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '40g',
        'sell-price': '30g',
        'type': 'grain'
    },

    'blueberry': {
        'season': 'summer',
        'days-to-grow': 13,
        'regrowth': 4,
        'cost': '80g',
        'sell-price': '50g',
        'type': 'fruit'
    },

    'corn': {
        'season': 'summer',
        'days-to-grow': 14,
        'regrowth': 4,
        'cost': '150g',
        'sell-price': '50g',
        'type': 'vegetable'
    },

    'hops': {
        'season': 'summer',
        'days-to-grow': 11,
        'regrowth': 1,
        'cost': '60g',
        'sell-price': '25g',
        'type': 'vegetable'
    },

    'hot pepper': {
        'season': 'summer',
        'days-to-grow': 5,
        'regrowth': 3,
        'cost': '40g',
        'sell-price': '40g',
        'type': 'vegetable'
    },

    'melon': {
        'season': 'summer',
        'days-to-grow': 12,
        'regrowth': false,
        'cost': '80g',
        'sell-price': '250g',
        'type': 'fruit'
    },

    'poppy': {
        'season': 'summer',
        'days-to-grow': 7,
        'regrowth': false,
        'cost': '100g',
        'sell-price': '140g',
        'type': 'flower'
    },

    'radish': {
        'season': 'summer',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '40g',
        'sell-price': '90g',
        'type': 'vegetable'
    },

    'red-cabbage': {
        'season': 'summer',
        'days-to-grow': 9,
        'regrowth': false,
        'cost': '100g',
        'sell-price': '260g',
        'type': 'vegetable'
    },

    'starfruit': {
        'season': 'summer',
        'days-to-grow': 13,
        'regrowth': false,
        'cost': '400g',
        'sell-price': '750g',
        'type': 'fruit'
    },

    'summer-spangle': {
        'season': 'summer',
        'days-to-grow': 8,
        'regrowth': false,
        'cost': '50g',
        'sell-price': '90g',
        'type': 'flower'
    },

    'sunflower': {
        'season': 'summer',
        'days-to-grow': 8,
        'regrowth': false,
        'cost': '200g',
        'sell-price': '80g',
        'type': 'flower'
    },

    'tomato': {
        'season': 'summer',
        'days-to-grow': 11,
        'regrowth': 4,
        'cost': '50g',
        'sell-price': '60g',
        'type': 'fruit'
    },

    'wheat': {
        'season': 'summer',
        'days-to-grow': 4,
        'regrowth': false,
        'cost': '10g',
        'sell-price': '25g',
        'type': 'grain'
    },

    'amaranth': {
        'season': 'fall',
        'days-to-grow': 7,
        'regrowth': false,
        'cost': '70g',
        'sell-price': '150g',
        'type': 'grain'
    },

    'artichoke': {
        'season': 'fall',
        'days-to-grow': 8,
        'regrowth': false,
        'cost': '30g',
        'sell-price': '160g',
        'type': 'vegetable'
    },

    'beet': {
        'season': 'fall',
        'days-to-grow': 6,
        'regrowth': false,
        'cost': '20g',
        'sell-price': '100g',
        'type': 'vegetable'
    },
    
    'bok-choy': {
        'season': 'fall',
        'days-to-grow': 4,
        'regrowth': false,
        'cost': '50g',
        'sell-price': '80g',
        'type': 'vegetable'
    },

    'cranberries': {
        'season': 'fall',
        'days-to-grow': 7,
        'regrowth': 5,
        'cost': '240g',
        'sell-price': '75g',
        'type': 'fruit'
    },

    'eggplant': {
        'season': 'fall',
        'days-to-grow': 5,
        'regrowth': 5,
        'cost': '20g',
        'sell-price': '60g',
        'type': 'vegetable'
    },

    'fairy-rose': {
        'season': 'fall',
        'days-to-grow': 12,
        'regrowth': false,
        'cost': '200g',
        'sell-price': '290g',
        'type': 'flower'
    },

    'grape': {
        'season': 'fall',
        'days-to-grow': 10,
        'regrowth': 3,
        'cost': '60g',
        'sell-price': '80g',
        'type': 'fruit'
    },

    'pumpkin': {
        'season': 'fall',
        'days-to-grow': 13,
        'regrowth': false,
        'cost': '100g',
        'sell-price': '320g',
        'type': 'vegetable'
    },

    'yam': {
        'season': 'fall',
        'days-to-grow': 10,
        'regrowth': false,
        'cost': '60g',
        'sell-price': '160g',
        'type': 'vegetable'
    },

    'ancient-fruit': {
        'season': 'any',
        'days-to-grow': 28,
        'regrowth': 7,
        'cost': '100-1000g',
        'sell-price': '550g',
        'type': 'special-fruit'
    },

    'cactus-fruit': {
        'season': 'greenhouse',
        'days-to-grow': 12,
        'regrowth': 3,
        'cost': '150g',
        'sell-price': '75g',
        'type': 'special-fruit'
    },

    'fiber': {
        'season': 'any',
        'days-to-grow': 7,
        'regrowth': false,
        'cost': 'free',
        'sell-price': '1g',
        'type': 'grain'
    },

    'pineapple': {
        'season': 'summer',
        'days-to-grow': 14,
        'regrowth': 7,
        'cost': 'magma-cap',
        'sell-price': '300g',
        'type': 'fruit'
    },

    'taro-root': {
        'season': 'summer',
        'days-to-grow': 10,
        'regrowth': false,
        'cost': '2 bone fragment',
        'sell-price': '100g',
        'type': 'spice'
    },

    'sweet-gem-berry': {
        'season': 'fall',
        'days-to-grow': 24,
        'regrowth': false,
        'cost': '1000g',
        'sell-price': '3000g',
        'type': 'fruit'
    },

    'tea-leaves': {
        'season': 'any',
        'days-to-grow': 20,
        'regrowth': 1,
        'cost': 'free',
        'sell-price': '50g',
        'type': 'tea'
    },

    'unknown': {
        'season': 'unknown',
        'days-to-grow': 'unknown',
        'regrowth': false,
        'cost': 'unknown',
        'sell-price': 'unknown',
        'type': 'unknown'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const cropName = request.params.name.toLowerCase()
    if(crops[cropName]) {
        response.json(crops[cropName])
    } else {
        response.json(crops['unknown'])
    }
    //response.json(crops)
})

app.listen(process.env.port || PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})