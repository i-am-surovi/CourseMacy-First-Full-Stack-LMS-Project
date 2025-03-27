import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const register = async(req, res)=> {
    try {
        const {name, email, password, role} = req.body;
        if(!name || !email || !password || !role){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists with the email"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        return res.status(201).json({
            success:true,
            message:"Account Created Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to register"
        })
    }
}