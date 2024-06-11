import userAccountSchema from "../../../../models/userAccountSchema";
import connectDB from "../../../../config/database";
import { hashPassword, comparePasswords } from "../helpers/helpers";


export async function insert(data) {
    try {
        console.log("Connecting to the database...");
        await connectDB();

        console.log("Inserting user account:", data);
        const hashedPassword = await hashPassword(data.password);
        const user = await userAccountSchema.create({ ...data, password: hashedPassword });

        console.log("Account inserted successfully.");
        return true;
    } catch (err) {
        console.error("Error inserting user account:", err);
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

export async function getById(email) {
    try {
      console.log('Fetching accounts created by:', email);
      await connectDB(); // Ensure the database connection is successful
  
      // Find accounts where the 'created_by' field matches the provided email
      const accounts = await userAccountSchema.find({ created_by: email });
  
      if (!accounts || accounts.length === 0) {
        console.log('No accounts found for:', email);
        return []; // Return empty array if no accounts are found
      }
  
      console.log('Accounts fetched successfully.');
      return accounts;
    } catch (err) {
      console.error('Error fetching accounts:', err);
      throw new Error('Failed to fetch accounts'); // Rethrow the error to propagate it further
    }
  }


