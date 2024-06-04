import { insert, showAll } from "../controllers/tradeController";

export async function GET (){
    const res = await showAll()
    return Response.json(res)
}
export async function POST(req) {
    const data = await req.json();
    const res=insert(data)
    return Response.json({
   inserted:res
    })
} 