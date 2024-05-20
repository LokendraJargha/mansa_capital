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

export default function Login() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Sign In to Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">REGISTERED EMAIL</Label>
          <Input id="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">PASSWORD</Label>
          <Input id="password" />
        </div>
      </CardContent>
      <div className="flex items-center px-6 pb-3 space-x-2">
        <Checkbox id="remember" />
        <label
          htmlFor="remember"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
      </div>
      <CardFooter>
        <Button>LOGIN</Button>
      </CardFooter>
      <div className="text-sm text-muted-foreground">
        <p>
          Forgot password?{" "}
          <a href="/auth/reset-password" className="hover:underline">
            Send Link
          </a>
        </p>
        <p>
          Don't have an account?{" "}
          <a href="/auth/register" className="hover:underline">
            Sign Up
          </a>
        </p>
        <p>
          Did not receive confirmation instruction?{" "}
          <a href="/auth/resend-confirmation" className="hover:underline">
            Resend Email
          </a>
        </p>
      </div>
    </Card>
  );
}
