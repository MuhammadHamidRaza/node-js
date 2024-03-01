import  express  from "express";
import Users from "../models/usersSchema.mjs";
import login from "../models/loginSchema.mjs"; 


const Router = express.Router();



Router.get('/',async (req,res)=> {
    try{
        const users = await Users.find()
    res.send({ message: "Data fetched successfully", data: users })

    }catch(e){
    res.send({ message: e.message })

    }
})


Router.post('/add',async (req,res) => {
try{
    const user = new Users(req.body)
    await user.save()
    res.send({ message: "User registered successfully!" })
}catch(e){
    res.send({ message: e.message })
}
})


Router.post('/login',async (req,res) => {
    try{
        const { email, password } = req.body
        //Step 1: Check if email exists
        const user = await login.findOne({ email })

        if(!user){
            res.send({ message: "User not found!" })
            return
        }
        const isCorrectPassword = user.comparePassword(password)
        if (!isCorrectPassword) {
            res.send({ message: "Invalid Password" })
            return
        }

        //Step 3: Generate Token

        res.send({ message: "User logged in successfully!" })


    }catch(e){
        res.send({ message: e.message })
    }
    })
    

export default Router;