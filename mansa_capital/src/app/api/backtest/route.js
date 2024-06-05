import { showAll, insert } from "../controllers/backtestController";

export async function GET() {

    const data = await req.json();
    const account = await insert(data);
    if (account) {
        return Response.json({ message: "UserAccount created Successfully" });
    }
    else
        return Response.json(
            { message: "UserAccount creation failed" },
            { status: 500 }
        );

}

export async function POST() {
    const res = await showAll();
    return Response.json(res);
}