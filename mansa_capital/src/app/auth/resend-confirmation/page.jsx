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

export default function ResendConfirmation() {
  return (
    <div className="flex flex-row">
      <div className="flex w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <img src="/images/Designer.png" />
      </div>
      <Card className="w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <CardHeader>
          <CardTitle>Sign In to Your Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">REGISTERED EMAIL</Label>
            <Input id="email" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
