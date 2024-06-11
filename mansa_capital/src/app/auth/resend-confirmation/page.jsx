import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResendConfirmation() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/auth.jpg")' }}
      ></div>
      <div className="flex justify-center items-center absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-400 to-purple-500 opacity-70"></div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="flex flex-col justify-center w-full max-w-sm border rounded-lg ring-gray-200 px-2 mx-2 bg-white bg-opacity-100 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Resend confirmation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">EMAIL</Label>
              <Input id="email" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
