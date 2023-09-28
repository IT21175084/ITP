const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionSchema = new Schema({

    item_name :{
        type : String,
        required: true
    },
    description :{
        type : String,
        required: true
    },
    offer :{
        type : String,
        required: true
    },
    price :{
        type : Number,
        required: true
    }
})

const promotion = mongoose.model("promotion",promotionSchema);

module.exports = promotion;
