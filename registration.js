const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({

    first_name :{
        type : String,
        required: true
    },
    last_name :{
        type : String,
        required: true
    },
    username :{
        type : String,
        required: true
    },
    phone_number :{
        type : Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Email is not valid')
          }
        }
    },
    address: {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
})

const registration = mongoose.model("registration",doctorSchema);

module.exports = registration;
