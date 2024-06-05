import backtestSchema from "../../../../models/backtestSchema";
import connectDB from "../../../../config/database";
export async function showAll() {
    connectDB()

    const items = await backtestSchema.find()
    return items
}

export async function insert(data) {
    connectDB()
    const item = await backtestSchema.create(data)
    if (item) {
        return true
    }
    else {
        return false
    }

}