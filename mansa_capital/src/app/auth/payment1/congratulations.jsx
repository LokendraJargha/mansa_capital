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
    <div className="mx-2 px-2 py-4">
      <div>
        <div>
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
      <div className="w-2/5">
        <img
          src="/images/stock.png"
          width={300}
          height={600}
          alt="image of stock"
        />
      </div>
      <div className="flex flex-col w-3/5 ps-2 ml-2 text-sm">
        <p className="">
          You made a wise investment by joining Mansa Trading Signals and I
          cannot wait to see you begin your journey to real financial freedom.
        </p>
        <p className="py-2">
          Your subscription payment is successful and you will receive the
          following emails in the next 2-4 minutes:
        </p>
        <p className="py-2">
          [1] An email with your receipt/invoice. <br />
          [2] An email with login credentials for the system.
          <br />
          [3] An email saying thanks and explaining the next steps.
        </p>
        <p className="py-2">
          If you do not receive these emails within 15 minutes, please check
          your spam and junk folders to make sure they're not hiding in there.
        </p>
        <p className="py-2">
          If you still have not received your login information after
          30-minutes, please email to support@mansa-capital.com and my team will
          help you out.
        </p>
        <p className="py-2">
          I look forward to working with you towards your financial freedom!
        </p>

        <p className="py-2">- Adil Khan, Founder and CEO, Mansa Capital</p>
      </div>
    </div>
  );
};
