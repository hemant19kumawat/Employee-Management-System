const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
    
});

const employeeModel = mongoose.model("Employees",employeeSchema);

module.exports = employeeModel;