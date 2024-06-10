import { hashPassword, comparePasswords } from "../helpers/helpers";
import userSchema from "../../../../models/userSchema";
import connectDB from "../../../../config/database";
import UserAccount from "../../../../models/userAccountSchema";

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
        const isPassMatch = await comparePasswords(data.password, user?.password)
        if (!isPassMatch) {
            console.log("Password does not match");
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

export async function ChangePassword(data) {
    connectDB()
    try {
        const user = await userSchema.findOne({ email: data.email })
        console.log("comparing -->" ,user?.password,data.oldPassword)
        console.log("comparing -->" ,user?.email,data.email)
        if(!user) return null

        const isPassMatch = await comparePasswords(data.oldPassword, user?.password)
        const isPasswordSame = await comparePasswords(data.password, user?.password)
        if (!isPassMatch) {
            console.log("Password didnt match")
            return null
        }
        if (isPasswordSame){
            console.log("Password is same")
            return null
        }
        console.log("password match is  ",isPassMatch )
        console.log("New password is  ",data.password )
        const updatePassword =await hashPassword(data.password)
        console.log("changed password is  ",updatePassword )
    await userSchema.findOneAndUpdate(
      { email: data.email },
      { password: updatePassword }
    )
    console.log("Password changed successfully")
        return { ...user._doc, password: undefined }
    }
    catch (err) {
        console.log(err)
        return null
    }
}

export async function sendTokenInEmail(data) {
    connectDB()
    try {
        const user = await userSchema.findOne({ email: data.email })
        return user
    }
    catch (err) {
        console.log(err)
        return null
    }
    
}



