import mongoose from "mongoose";

import bcrypt from "bcryptjs"

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    fullname: {
        type: String,
        required: true
    }
})



userSchema.pre('save', function (next) {
    const user = this
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);

    user.password = hash
    next()
})


const Users = mongoose.model("users", userSchema)

export default Users