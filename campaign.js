const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignSchema = new Schema({

    member_one :{
        type : String,
        required: true
    },
    member_two :{
        type : String,
        required: true
    },
    member_three :{
        type : String,
        required: true
    },
    member_four :{
        type : String,
        required: true
    },
    description :{
        type : String,
        required: true
    }
})

const campaign = mongoose.model("campaign",campaignSchema);

module.exports = campaign;
