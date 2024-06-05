import CustomisationSchema from "../../../../models/customisationSchema";
import connectDB from "../../../../config/database";


export async function insert(data) {
    try {
        console.log("Connecting to the database...");
        await connectDB();

        console.log("Inserting user data:", data);
        const user = await CustomisationSchema.create({ ...data});

        console.log("User inserted successfully.");
        return true;
    } catch (err) {
        console.error("Error inserting user data:", err);
        return false;
    }
}
export async function showAll() {
    try {
        console.log("Connecting to the database...");
        await connectDB();

        console.log("Fetching all customisation data...");
        const items = await CustomisationSchema.find();

        console.log("Customized data fetched successfully.");
        return items;
    } catch (err) {
        console.error("Error fetching customisation data", err);
        return [];
    }
}