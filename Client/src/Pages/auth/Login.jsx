import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please Login to your Account 
        </p>
        {/* Email Input */}
        <div className="mb-4">
          <Label className="mb-1">Email Address</Label>
          <Input placeholder="Enter Your Email" />
        </div>
        {/* Password Input */}
        <div className="mb-4">
          <Label className="mb-1">Password</Label>
          <Input placeholder="Enter Your Password" />
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Login</Button>
        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300"/>
          <span className="mx-3 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300"/>
        </div>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
