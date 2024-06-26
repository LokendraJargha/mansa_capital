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
import Customisation from "./customisation";
import TradeSettings from "./trade";
import Session from "./sessions";
import Probablity from "./probability";
import Privacy from "./privacy";
import Pullbacks from "./pullbacks";
import Tags from "./tags";
import Education from "./education";
import History from "./history";
import Performance from "./performance";
import Instruments from "./instruments";
import Data from "./data";

export default function Settings() {
  return (
    <>
      <div className="flex m-3 px-3 py-6 rounded-lg bg-white">
        <div className="flex w-full">
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
