import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import Input from "../../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = (e) => {

  // }
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-1.25 mb-6">
          Please enter your details to log in
        </p>
        <form>
          <Input
            label={"Email ID"}
            type={"text"}
            placeholder={"Enter a valid email ID"}
            onChange={(target) => setEmail(target.value)}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(target) => setPassword(target.value)}
          />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
