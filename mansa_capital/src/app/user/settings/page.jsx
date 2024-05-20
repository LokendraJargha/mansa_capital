import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Settings() {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent className="space-y-2">
        <div>
          <div>
            <div className="space-y-1 w-full ">
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SUBSCRIPTIONS</div>
                <div className="flex w-4/5">
                  <ul className="text-sm w-full text-muted-foreground">
                    <li className="m-4">
                      1 Account connected x USD 100 - renewed Automatically on
                      [dd] of every month
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
              <div className="flex flex-row p-4">
                <div className="flex w-full">
                  <div className="flex w-2/5 m-4">ACCOUNTS</div>
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
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Account No:
                    </li>
                    <li className="flex flex-row w-2/3">MT5 Account only</li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Password:
                    </li>
                    <li className="flex flex-row w-2/3"></li>
                  </ul>

                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Account Type:
                    </li>
                    <li className="flex flex-row w-2/3"></li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Leverage:
                    </li>
                    <li className="flex flex-row w-2/3"></li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Trade Entry Method:
                    </li>
                    <li className="flex flex-row w-2/3">Auto/ Manual</li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Trade Size:
                    </li>
                    <li className="flex flex-row w-2/3">0.5% per trade</li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Signal Delivery Over:
                    </li>
                    <li className="flex flex-row w-2/3">
                      App, Email, SMS, Discord, Telegram
                    </li>
                  </ul>
                  <ul className="flex flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Trading Style:
                    </li>
                    <li className="flex flex-row w-2/3">
                      Day/ Swing/ Investor
                    </li>
                  </ul>
                  <ul className="flex w-3/5 flex-row m-4">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      CSV:
                    </li>
                    <li className="flex flex-row w-2/3">[Add CSV template]</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">CUSTOMISATIONS</div>
                <div className="flex flex-col w-4/5">
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Screen Mode
                    </li>
                    <li className="flex flex-row w-2/3">Dark or Light </li>
                  </ul>
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Base Timezone
                    </li>
                    <li className="flex flex-row w-2/3">US/ Eastern</li>
                  </ul>
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Base Currency
                    </li>
                    <li className="flex flex-row w-2/3">USD</li>
                  </ul>
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Date Format
                    </li>
                    <li className="flex flex-row w-2/3">dd/mm/yyyy</li>
                  </ul>
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Languages
                    </li>
                    <li className="flex flex-row w-2/3">English</li>
                  </ul>
                  <ul className="flex flex-row m-3">
                    <li className="flex flex-row w-1/3 text-sm text-muted-foreground text-right">
                      Font Size
                    </li>
                    <li className="flex flex-row w-2/3">
                      Small/ Medium/ Large
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">TRADE SETTINGS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SESSIONS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SESSIONS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SESSIONS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SESSIONS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
              <div className="flex flex-row  p-4">
                <div className="flex w-1/5 m-4">SESSIONS</div>
                <div className="flex w-4/5 m-4 text-sm text-muted-foreground ">
                  LDN, LDN,LULL,NY, NY, LULL,ASIA, ASIA, LULL
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
