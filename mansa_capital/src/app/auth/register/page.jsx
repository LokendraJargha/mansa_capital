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

export default function Register() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Sign Up to Create Your New Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="firstName">FIRST NAME</Label>
          <Input id="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lastName">LAST NAME</Label>
          <Input id="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">EMAIL</Label>
          <Input id="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">PASSWORD</Label>
          <Input id="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">CONFIRM PASSWORD</Label>
          <Input id="password" />
        </div>
      </CardContent>

      <CardFooter>
        <Button>REGISTER</Button>
      </CardFooter>
      <div className="flex items-center mx-6 pb-3 space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          'By signing up, I agreeto the Privacy Policy and the Perms of
          Services.'
        </label>
      </div>
      <div className="text-sm text-muted-foreground mx-6 ">
        <p>
          Have an account?{" "}
          <a href="/auth/login" className="hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </Card>
  );
}
