const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var iquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    kitSize:{
        type:Number,
        required:true,
        unique:true,
    },
    package:{
        type:Number,
        required:true,
        unique:true,
    },
});

//Export the model
module.exports = mongoose.model('Inquiry', inquirySchema);