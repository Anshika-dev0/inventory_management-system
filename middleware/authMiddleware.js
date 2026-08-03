//import the jwt library
const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => { //verify and send(next)
    console.log("Auth middleware");
    const authHeader = req.headers.authorization; //reads the authHeader
    if(!authHeader){
        returnres.status(401).json({message: "Token not found"});//if taken not sended

    }
    const token = authHeader.split(" ")[1];

    try{
        const decode = jwt.verify(token, "mySecrateKey"); //checks the token
        req.user = decode;
        console.log(req.user);
        next(); //moves the controller
    } catch (error) {
        res.status(401).json({message:"Invalid Token"});
    }
};

module.exports = verifyToken;