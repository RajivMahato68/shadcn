import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login({ onRegisterClick }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const submitData = (data) => {
    console.log("it worked", data);
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(submitData)}>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <div className="relative w-full max-w-sm">
                <input
                  id="password"
                  {...register("password")}
                  type={passwordVisible ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button onClick={onRegisterClick} className="w-full mt-2">
                Register
              </Button>
            </div>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
