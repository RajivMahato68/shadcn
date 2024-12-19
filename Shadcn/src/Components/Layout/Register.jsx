import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function RegisterForm({ onCancel }) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const confirmTogglePasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const schema = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      mobileN: z.preprocess(
        (value) => String(value).trim(), // Ensure the value is treated as a string
        z
          .string()
          .regex(
            /^\d{10,15}$/,
            "Mobile number must be between 10 and 15 digits"
          )
      ),
      password: z.string().min(8).max(100),
      confirmPassword: z.string().min(8).max(100),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
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
    <Card className="w-[350px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(submitData)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">FirstName</Label>
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
              <Input
                id="firstName"
                type="text"
                {...register("firstName")}
                placeholder="Enter your FirstName"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="LastName">LastName</Label>
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}

              <Input
                id="lastName"
                type="text"
                {...register("lastName")}
                placeholder="Enter your lastName"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <Input
                id="email"
                type="text"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Mobile">Mobile N.</Label>
              {errors.mobileN && (
                <span className="text-red-500">{errors.mobileN.message}</span>
              )}
              <Input
                id="mobile"
                type="text" // Keep it as a string
                {...register("mobileN")}
                placeholder="Enter your Mobile Number"
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">ConfirmPassword</Label>

              <div className="relative w-full max-w-sm">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type={confirmPasswordVisible ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <button
                  type="button"
                  onClick={confirmTogglePasswordVisibility}
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  {confirmPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Register</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
