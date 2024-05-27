import connectDB from "../../../../config/database";
import userSchema from "../../../../models/userSchema";
export async function POST(req) {
    const data = await req.json(); //this gives all the post req json data
    connectDB();
    try {
        //create a token and send 
        //if false then send error message
        const isValidUser = await userSchema.findOne({ email: data.email });
        if (!isValidUser) {
            return Response.json({
                error: "Invalid User",
            });
        }
        // hash password using brcrypt and compare the hash
        const isMatch = await comparePasswords(data.password, isValidUser.password);
        if (!isMatch) {
            return Response.json({
                error: "Invalid Password",
            });
        }
        //create a token
    }
    catch (err) {
        console.log(err);
        Response.json({
            error: err.message,
        });
    }
}

async function comparePasswords(enteredPassword, storedHashedPassword) {
    const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
    return isMatch;
}