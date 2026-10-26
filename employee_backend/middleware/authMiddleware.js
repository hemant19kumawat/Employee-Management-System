const jwt = require('jsonwebtoken')
const protect = (req,res,next)=>{
    try{
        let token;
        if(req.cookies.token){
            token = req.cookies.token
        }
        else if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        )
        {
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Please Login"
            })
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decode
        next()
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Invalid token"
        })
    }
}

module.exports = {protect}