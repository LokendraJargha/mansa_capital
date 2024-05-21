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
import PasswordInput from "@/components/ui/password";

export default function Settings() {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent className="space-y-2">
        <div>
          <div>
            <div className="space-y-1 w-full ">
              <Subscription />
              <Accounts />

              <Customisation />
              <TradeSettings />
              <Session />
              <Probablity />
              <Privacy />
              <Data />
              <Performance />
              <Instruments />
              <Pullbacks />
              <Tags />
              <Education />
              <History />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
const Subscription = () => {
  return (
    <div className="flex flex-row  p-4">
      <div className="flex w-1/5 m-4 text-lg">SUBSCRIPTIONS</div>
      <div className="flex w-4/5">
        <ul className="text-sm w-full text-muted-foreground">
          <li className="m-4">
            1 Account connected x USD 100 - renewed Automatically on [dd] of
            every month
          </li>
          <li className="flex flex-row m-4">
            <div className="flex w-1/2">Customer Agreement </div>
            <div className="flex w-1/2">User Feedback</div>
          </li>
          <li className="m-4">Risk Disclosure</li>
          <li className="m-4">Cancel Subscription</li>
        </ul>
      </div>
    </div>
  );
};
const Accounts = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="flex w-full">
        <div className="flex w-2/5 m-4 text-lg">ACCOUNTS</div>
        <div className="flex w-3/5 m-4">
          <ul className="text-sm text-muted-foreground">
            <li className="m-4">Account[1]</li>
            <li className="m-4">Account[2]</li>
            <li className="m-4">Account[3]</li>
            <li className="m-4">Account[4]</li>
            <li className="m-4">Account[5]</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Card className="w-full">
          <CardContent className="space-y-2 my-4 py-4">
            <div className=" flex flex-row ">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="accountno"
              >
                Account No:
              </Label>
              <Input className="w-2/3" id="accountno" />
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="password"
              >
                Password:
              </Label>
              <div className="flex w-2/3">
                <PasswordInput />
              </div>
            </div>

            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="accounttype"
              >
                Account Type:
              </Label>
              <Input className="w-2/3" id="accounttype" />
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="leverage"
              >
                Leverage:
              </Label>
              <Input className="w-2/3" id="leverage" />
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradeentry"
              >
                Trade Entry Method:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="Manual" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradeSize"
              >
                Trade Size:
              </Label>
              <Input className="w-2/3" id="tradeSize" />
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradeSize"
              >
                Signal Delivery Over:
              </Label>

              <div className="flex flex-col">
                <div>
                  <Checkbox id="app" />
                  <label
                    htmlFor="app"
                    className="text-sm w-2/3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    App
                  </label>
                </div>
                <div>
                  <Checkbox id="email" />
                  <label
                    htmlFor="email"
                    className="text-sm w-2/3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                </div>
                <div>
                  <Checkbox id="sms" />
                  <label
                    htmlFor="sms"
                    className="text-sm w-2/3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SMS
                  </label>
                </div>
                <div>
                  <Checkbox id="discord" />
                  <label
                    htmlFor="discord"
                    className="text-sm w-2/3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Discord
                  </label>
                </div>
                <div>
                  <Checkbox id="telegram" />
                  <label
                    htmlFor="telegram"
                    className="text-sm w-2/3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Telegram
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradingStyle"
              >
                Trading Style:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="swing">Swing</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="csv"
              >
                CSV:
              </Label>
              <Input className="w-2/3" id="csv" type="file" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
const Customisation = () => {
  return (
    <div className="flex flex-row  p-4">
      <div className="flex w-1/5 m-4 text-lg">CUSTOMISATIONS</div>
      <div className="flex w-1/2 flex-col">
        <Card className="w-full">
          <CardContent className="space-y-2 my-4 py-4">
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="screenMode"
              >
                Screen Mode:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="Dark" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="baseTimezone"
              >
                Base Timezone:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="US" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="us">US</SelectItem>
                    <SelectItem value="eastern">Eastern</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="baseTimezone"
              >
                Base Currency:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="pound">Pound Sterling</SelectItem>
                    <SelectItem value="euro">Euro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="dateFormat"
              >
                Date Format:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="dd/mm/yyyy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="dmy">dd/mm/yyyy</SelectItem>
                    <SelectItem value="myd">mm/dd/yyyy</SelectItem>
                    <SelectItem value="ymd">yyyy/mm/dd</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="languages"
              >
                Languages:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="fontSize"
              >
                Font Size:
              </Label>
              <Select>
                <SelectTrigger className="w-2/3">
                  <SelectValue placeholder="Small" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
const TradeSettings = () => {
  return (
    <div className=" flex flex-row w-1/2 p-4 m-4">
      <Label className="flex w-4/5 text-lg" htmlFor="tradeSettings">
        TRADE SETTINGS
      </Label>
      <Select className="flex w-1/5">
        <SelectTrigger>
          <SelectValue placeholder="LDN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> </SelectLabel>
            <SelectItem value="ldn">LDN</SelectItem>
            <SelectItem value="ldn">LDN</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
            <SelectItem value="ny">NY</SelectItem>
            <SelectItem value="ny">NY</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
            <SelectItem value="asia">ASIA</SelectItem>
            <SelectItem value="asia">ASIA</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

const Session = () => {
  return (
    <div className=" flex flex-row w-1/2 p-4 m-4">
      <Label className="flex w-4/5 text-lg" htmlFor="session">
        SESSION
      </Label>
      <Select className="flex w-1/5">
        <SelectTrigger>
          <SelectValue placeholder="LDN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> </SelectLabel>
            <SelectItem value="ldn">LDN</SelectItem>
            <SelectItem value="ldn">LDN</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
            <SelectItem value="ny">NY</SelectItem>
            <SelectItem value="ny">NY</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
            <SelectItem value="asia">ASIA</SelectItem>
            <SelectItem value="asia">ASIA</SelectItem>
            <SelectItem value="lull">LULL</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
const Probablity = () => {
  return (
    <div className=" flex flex-row w-1/2 p-4 m-4">
      <Label className="flex w-4/5 text-lg" htmlFor="probablity">
        PROBABLITY
      </Label>
      <Select className="flex w-1/5">
        <SelectTrigger>
          <SelectValue placeholder="High" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> </SelectLabel>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
const Privacy = () => {
  return (
    <div className="flex flex-row w-1/2 p-4">
      <div className="flex w-2/5 m-4 mr-10 text-lg">PRIVACY</div>
      <div className="flex w-3/5">
        <Card className="w-full">
          <CardContent className="space-y-2 my-2 py-4">
            <div className=" flex flex-row ">
              <Label
                className="w-1/3 text-sm text-muted-foreground  mr-4"
                htmlFor="email"
              >
                Email:
              </Label>
              <Input className="w-2/3" id="email" type="email" />
            </div>
            <div className=" flex flex-row relative">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="password"
              >
                Password:
              </Label>
              <div className="flex w-2/3">
                <PasswordInput />
              </div>
            </div>

            <div className=" flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground mr-4"
                htmlFor="phone"
              >
                Phone:
              </Label>
              <Input className="w-2/3" id="phone" type="number" />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};
const Data = () => {
  return (
    <div>
      <div>DATA</div>
    </div>
  );
};
const Performance = () => {
  return (
    <div>
      <div>PERFORMANCE</div>
    </div>
  );
};
const Instruments = () => {
  return (
    <div>
      <div>INSTRUMENTS</div>
    </div>
  );
};
const Pullbacks = () => {
  return (
    <div>
      <div>PULLBACKS</div>
    </div>
  );
};
const Tags = () => {
  return (
    <div>
      <div>TAGS</div>
    </div>
  );
};
const Education = () => {
  return (
    <div>
      <div>EDUCATION</div>
    </div>
  );
};
const History = () => {
  return (
    <div>
      <div>HISTORY</div>
    </div>
  );
};
