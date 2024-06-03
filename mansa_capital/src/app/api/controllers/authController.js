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
    console.log("datais-------- ",data)
    connectDB()
    try {
        const user = await userSchema.findOne({ email: data.email })
        console.log("user found is ",user)
        if(!user) return null
        const isPassMatch = comparePasswords(user?.password, data.password)
        if (!isPassMatch) {
            return null
        }
        console.log("password match is  ",isPassMatch ,)

        //remove password from user object
        return { ...user._doc, password: undefined }
    }
    catch (err) {
        console.log(err)
        return null
    }

}