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
import Profile from "./profile";
import Subscription from "./subscription";
import Accounts from "./accounts";
import Customisation from "./customization";
import TradeSettings from "./trade";
import Session from "./sessions";
import Probablity from "./probability";
import Privacy from "./privacy";

export default function Settings() {
  return (
    <>
      <div>
        <div>
          <div className="space-y-1 w-full ">
            <Profile />
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
    </>
  );
}

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
