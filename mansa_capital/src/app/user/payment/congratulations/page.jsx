import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CreditCardInput from "@/components/ui/creditcard";
export default function Payment() {
  return (
    <div className="mx-8 px-8 py-4">
      <div>
        <div>
          <div>
            <p className="text-2xl font-bold">Congratulations!</p>

            <p className="text-2xl font-bold">Your Subscription Has Started</p>
          </div>
          <div className="flex flex-col">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

const PaymentForm = () => {
  return (
    <div className="flex flex-row w-full ">
      <div className="w-1/2">
        <img
          src="/images/stock.png"
          width={600}
          height={400}
          alt="image of stock"
        />
      </div>
      <div className="flex flex-col w-1/2 m-4 p4">
        <p className="mx-4 p-2">
          You made a wise investment by joining Mansa Trading Signals and I
          cannot wait to see you begin your journey to real financial freedom.
        </p>
        <p className="mx-4 p-2">
          Your subscription payment is successful and you will receive the
          following emails in the next 2-4 minutes:
        </p>
        <p className="mx-4 p-2">
          [1] An email with your receipt/invoice. <br />
          [2] An email with login credentials for the system.
          <br />
          [3] An email saying thanks and explaining the next steps.
        </p>
        <p className="mx-4 p-2">
          If you do not receive these emails within 15 minutes, please check
          your spam and junk folders to make sure they're not hiding in there.
        </p>
        <p className="mx-4 p-2">
          If you still have not received your login information after
          30-minutes, please email to support@mansa-capital.com and my team will
          help you out.
        </p>
        <p className="mx-4 p-2">
          I look forward to working with you towards your financial freedom!
        </p>

        <p className="mx-4 p-2">- Adil Khan, Founder and CEO, Mansa Capital</p>
      </div>
    </div>
  );
};
const Promotion = () => {
  return (
    <div>
      <div className="flex flex-row w-1/2 p-4">Hello</div>
    </div>
  );
};
