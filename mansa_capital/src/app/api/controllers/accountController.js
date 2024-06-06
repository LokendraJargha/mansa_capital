import userAccountSchema from "../../../../models/userAccountSchema";
import connectDB from "../../../../config/database";
import { hashPassword, comparePasswords } from "../helpers/helpers";


export async function insert(data) {
    try {
        console.log("Connecting to the database...");
        await connectDB();

        console.log("Inserting user data:", data);
        const hashedPassword = await hashPassword(data.password);
        const user = await userAccountSchema.create({ ...data, password: hashedPassword });

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

        console.log("Fetching all user accounts...");
        const items = await userAccountSchema.find();

        console.log("User accounts fetched successfully.");
        return items;
    } catch (err) {
        console.error("Error fetching user accounts:", err);
        return [];
    }
}

