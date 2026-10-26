const employee = require('../model/employeemodel');

const createEmployee = async(req,res)=>{
    try{
        let emp = await employee.create(req.body)
     res.status(200).json({
        success:true,
        emp
     })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const getallEmployee = async(req,res)=>{
    try{
     let emp = await employee.find()
     res.status(200).json({
        success:true,
        emp
     })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const updateEmployee = async(req,res)=>{
    try{
     let emp = await employee.findByIdAndUpdate(req.params.id,req.body)
     res.status(200).json({
        success:true,
        emp
     })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const getEmployeebyId = async(req,res)=>{
    try{
     let emp = await employee.findById(req.params.id)
     res.status(200).json({
        success:true,
        emp
     })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const deleteEmployee = async(req,res)=>{
    try{
     let emp = await employee.findByIdAndDelete(req.params.id)
     res.status(200).json({
        success:true,
        emp
     })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = {createEmployee,getallEmployee,updateEmployee,getEmployeebyId,deleteEmployee};