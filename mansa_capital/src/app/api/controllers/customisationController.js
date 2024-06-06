import CustomisationSchema from "../../../../models/customisationSchema";
import connectDB from "../../../../config/database";


export async function insert(data) {
    try {
        console.log("Connecting to the database...");
        await connectDB();
        const alreadyExist = await CustomisationSchema.findOne({ created_by: data.created_by });
        console.log("Inserting user data:", data);
        //if already exist then update else 
        if (alreadyExist) {
            console.log("User already exist");
            await CustomisationSchema.findOneAndUpdate({ created_by: data.created_by }, { $set: { ...data } }, { new: true });
            return true;
        }
        else {
            console.log("User does not exist");
            await CustomisationSchema.create({ ...data });
            return true;
        }
    } catch (err) {
        console.error("Error inserting user data:", err);
        return false;
    }
}
export async function showAll() {
    try {
        await connectDB();
        const items = await CustomisationSchema.findOne();
        return items;
    } catch (err) {
        console.error("Error fetching customisation data", err);
        return [];
    }
}