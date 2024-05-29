import { hashPassword, comparePasswords } from "../helpers/helpers";
import userSchema from "../../../../models/userSchema";
import connectDB from "../../../../config/database";

//returns true if user is created successfully
export async function Register(data) {
    connectDB()
    try {
        const user = await userSchema.create({ ...data, password: await hashPassword(data.password) });
        return true
    }
    catch (err) {
        console.log(err)
        return false
    }
}


//returns logged in user data or null if not logged in
export async function Login(data) {
    connectDB()

    try {
        const user = await userSchema.findOne({ email: data.email })
        const isPassMatch = comparePasswords(user.password, data.password)
        if (!isPassMatch) {
            return null
        }
        //remove password from user object
        return { ...user._doc, password: undefined }
    }
    catch (err) {
        console.log(err)
        return null
    }

}