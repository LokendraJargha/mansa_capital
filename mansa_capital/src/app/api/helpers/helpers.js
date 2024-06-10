import bcrypt from "bcryptjs";

export async function hashPassword(password) {
    try {
        console.log("Generating salt...");
        const salt = await bcrypt.genSalt(10);
        console.log("Salt generated:", salt); // Debug statement for salt

        console.log("Hashing password...");
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Password hashed:", hashedPassword);

        return hashedPassword;
    } catch (err) {
        console.error("Error hashing password:", err);
        return null;
    }
}

export async function comparePasswords(enteredPassword, storedHashedPassword) {
    try {
        console.log("Comparing passwords...");
        const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
        console.log("Passwords match:", isMatch);
        return isMatch;
    } catch (err) {
        console.error("Error comparing passwords:", err);
        return false;
    }
}
