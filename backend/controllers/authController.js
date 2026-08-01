const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const{
    registerUser : registerUserModel, getUserByEmail : getUserByEmailModel } = require("../models/authModel");
//yash
    const registerUser = async (req,res) => {
        try{
            const { name, email, password} = requestAnimationFrame.body;

            const hashedPassword =  await bcrypt.hash(password,10);

            const user = await registerUserModel (
                name, email,hashedPassword
            );

            res.status(201).json(user);
        } catch (error) {
            console.log(error);

            res.status(500).json({message:"Internal Server Error"});
        }
    };

    const loginUser = async (req,res) => {
        try {
            const { email, password } = req.body;
            const user = await getUserByEmailModel(email);

            if (!user) {
                return res.status(404).json({message:"User not Found"});
                
            }
            const isMatch = await bcrypt.compare(password,user.password);

            if (!isMatch){
                return res.status(401).json({message: "Invalid Password"});
            }
            const token = jwt.sign({id: user.id, email: user.email }, "mySecretKey",{
                expiresIn: "1h"
            });

            res.json({
                message: "Login Successful", token
            });
        } catch (error) {
            console.log(error);

            res.status(500).json({message: "Internal Server Error"});
        }
    };

    module.exports = {
        registerUser,
        loginUser
   
};