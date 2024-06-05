import { Payment } from "../controllers/authController";
export async function POST(req) {
  const data = await req.json();
  console.log("data is ------------------------------", data);

  const newData = {
    pricePerMonth: data.pricePerMonth,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    CardNumber: data.CreditCard,
    expiryDate: data.expiryDate,
    cvc: data.cvc,
  };

  const user = await Register(newData);

  if (user) {
    return Response.json({ message: "PaidSuccessfully" });
  }
}
