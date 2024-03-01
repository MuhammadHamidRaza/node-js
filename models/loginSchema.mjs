import mongoose from "mongoose";

import bcrypt from "bcryptjs"

const { Schema } = mongoose;

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})


loginSchema.methods.comparePassword = function (password) {
    const user = this
    //user.password === db password (encrypted) asjdhu2i346193
    //password === frontend password (normal) 123456
    console.log('db password', user.password)
    console.log('frontend password', password)

    return bcrypt.compareSync(password, user.password)
}

const login = mongoose.model("users", loginSchema)

export default login

