const user = require('../model/usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const signup = async(req,res) =>{
    let{name,email,password,role} = req.body;
    const hasedPassword = await bcrypt.hash(password,10);
    try{
        const users = await user.create({
            name,
            email,
            password: hasedPassword,
            role
        })
        res.status(201).json({
            success: true,
            message: "user register successfully!!"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const login = async(req,res)=>{
    try{
        let{email,password} = req.body

        const existingUser = await user.findOne({email})
        if(!existingUser){
            return res.status(400).json({
                success: false,
                message: "User not exist with this mail Id"
            })
        }
        const checkPassword = await bcrypt.compare(password,existingUser.password)
        if(!checkPassword){
            return res.status(400).json({
                success: false,
                message: "User password is wrong"
            })
        }
        const token = jwt.sign(
            {
                id: existingUser._id,
                email:existingUser.email,
                role:existingUser.role,
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*1000
        })
        res.status(200).json({
            success:true,
            message:"User loged in successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const logout = (req,res)=>{
    res.clearCookie("token")
    res.status(200).json({
        success:true,
        message:"Logout Successfully"
    })
}
const profile = async(req,res) =>{
    try{
        const users = await user.findById(req.user.id).select("-password")

        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            user
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}


module.exports = {signup,login,logout,profile}