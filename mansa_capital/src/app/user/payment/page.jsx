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
import Footer from "@/components/ui/footer";
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
    <>
      <div className="flex flex-row w-full ">
        <div className="w-1/2">
          <Card>
            <CardHeader></CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 mr-4 py-2">
                <Label
                  className="  text-muted-foreground mr-4"
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
                      <SelectItem className="  " value="usd100">
                        USD 100
                      </SelectItem>
                      <SelectItem className="  " value="usd200">
                        USD 200
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label
                  className="  text-muted-foreground mr-4"
                  htmlFor="firstName"
                >
                  FIRST NAME
                </Label>
                <Input id="firstName" />
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label
                  className="  text-muted-foreground mr-4"
                  htmlFor="lastName"
                >
                  LAST NAME
                </Label>
                <Input id="lastName" />
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label className="  text-muted-foreground mr-4" htmlFor="email">
                  EMAIL
                </Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label
                  className="  text-muted-foreground mr-4"
                  htmlFor="creditCardNumber"
                >
                  CREDIT CARD NUMBER
                </Label>
                <CreditCardInput className="text-right" />
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label
                  className="  text-muted-foreground mr-4"
                  htmlFor="expiryDate"
                >
                  EXPIRY DATE
                </Label>
                <Input className="text-right" id="expirydate" type="date" />
              </div>
              <div className="space-y-1 mr-4 py-2">
                <Label className="  text-muted-foreground mr-4" htmlFor="cvc">
                  CVC
                </Label>
                <Input className="text-right" id="cvc" type="number" />
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full   p-6">SUBSCRIBE</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col w-1/2 m-4 p-4">
          <div className="h-1/5 w-full flex justify-center items-center">
            <img
              src="/images/satisfaction.jpg"
              className="max-h-full max-w-full"
            />
          </div>
          <div
            className="h-3/5 bg-blue-500 bg-cover bg-center text-2xl text-white"
            style={{ backgroundImage: 'url("/images/stock.png")' }}
          >
            <p className="text-center my-5">Here's What You'll Get</p>

            <p className="my-5">
              - Live trading signal with auto trade <br />
              - 07 week training program on our Trading methodology <br />- Live
              community + Weekly Q & A Calls
            </p>
            <p className="my-5">USD [X] per month subscription fees</p>
            <img
              src="/images/satisfaction.jpg"
              className="max-h-32 max-w-32 my-5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Gaurantee = () => {
  return (
    <div className="flex flex-row justify-between w-full my-16">
      <Box key_={"Money Back Guarantee"} />
      <Box key_={"Privacy Guaranted"} />
      <Box key_={"100% Satisfaction Guarantee"} />
    </div>
  );
};
const Box = ({ key_, value }) => {
  return (
    <div className="flex flex-col w-1/6 px-3 text-center py-16 bg-muted">
      <p>{key_}</p>
    </div>
  );
};
