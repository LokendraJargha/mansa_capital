import { Login } from "../controllers/authController";
export async function POST(req) {
    const data = await req.json()
    const user = await Login(data)
    if (user) {
        return Response.json(user)
    }
}
