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
    <div className="m-4 p-4">
      <div>
        <div>
          <div>
            <div className="text-2xl font-bold">
              You are subscribing to Mansa Capital Trading Signals
            </div>
            <div>
              Start earnig 60%+ return to your portfolio with a single click of
              button
            </div>
          </div>
          <div className="flex flex-col">
            <PaymentForm />
            <Gaurantee />
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
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="baseTimezone"
              >
                PRICE PER MONTH
              </Label>
              <Select lassName="text-right">
                <SelectTrigger>
                  <SelectValue placeholder="USD 100" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem className="text-2xl " value="usd100">
                      USD 100
                    </SelectItem>
                    <SelectItem className="text-2xl " value="usd200">
                      USD 200
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="firstName"
              >
                FIRST NAME
              </Label>
              <Input id="firstName" />
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="lastName"
              >
                LAST NAME
              </Label>
              <Input id="lastName" />
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="email"
              >
                EMAIL
              </Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="creditCardNumber"
              >
                CREDIT CARD NUMBER
              </Label>
              <CreditCardInput className="text-right" />
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="expiryDate"
              >
                EXPIRY DATE
              </Label>
              <Input className="text-right" id="expirydate" type="date" />
            </div>
            <div className="space-y-1 mr-4">
              <Label
                className="text-2xl text-muted-foreground mr-4"
                htmlFor="cvc"
              >
                CVC
              </Label>
              <Input className="text-right" id="cvc" type="number" />
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full text-2xl p-6">SUBSCRIBE</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="h-1/3 w-full flex justify-center items-center">
          <img
            src="/images/satisfaction.jpg"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="h-2/3 bg-blue-500">Hello</div>
      </div>
    </div>
  );
};

const Gaurantee = () => {
  return (
    <div className="flex flex-row justify-between w-full my-16">
      <img src="https://placehold.co/200x200" />
      <img src="https://placehold.co/200x200" />
      <img src="https://placehold.co/200x200" />
    </div>
  );
};
