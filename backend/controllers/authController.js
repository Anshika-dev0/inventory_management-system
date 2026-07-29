const bcrypt = require("bcrypt");
const{
    registerUser : registerUserModel } = require("../models/authModel");

    const registerUser = async (requestAnimationFrame,res) => {
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

    module.exports = {
        registerUser
   
};