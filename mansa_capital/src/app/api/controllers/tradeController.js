import tradeSchema from "../../../../models/tradeSchema";
import connectDB from "../../../../config/database";
export async function showAll (){
    connectDB()
    const items = await tradeSchema.find()
    return items
} 

export async function insert (data) {
    connectDB()
   const item= await tradeSchema.create(data)
    if (item){
        return true
    }
    else {
        return false
    }

}