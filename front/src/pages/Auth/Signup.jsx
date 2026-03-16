import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-black">Create an Account</h3>
        <p className="text-sm text-slate-700 mt-1.25 mb-6">
          Join us today! It takes only a few steps to create your account and
          start tracking your expenses effectively.
        </p>
        <form>
          <Input
            label={"Full Name"}
            type={"text"}
            placeholder={"John Smith"}
            onChange={(target) => setFullName(target.value)}
          />
          <Input
            label={"Email ID"}
            type={"text"}
            placeholder={"johnsmith@example.com"}
            onChange={(target) => setEmail(target.value)}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(target) => setPassword(target.value)}
          />

          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg mb-4"
          >
            Sign Up
          </button>

          <p className="text-[13px] text-slate-800">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
