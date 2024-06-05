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

// export async function showAll(data) {
//   await connectDB();

//   try {


//   console.log("inside try");

//   console.log("creartedBy is ", data);

//   console.log("created_by is ", data.created_by);
//     const users = await userAccountSchema.find({ created_by: data.created_by });
//     console.log("created By found is ", users);

//     if (!users || users.length === 0) return null;

//     // Remove password from each user object
//     const sanitizedUsers = users.map(user => {
//       const { password, ...rest } = user._doc;
//       return rest;
//     });

//     return sanitizedUsers;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }
