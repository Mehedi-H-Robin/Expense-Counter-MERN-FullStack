import { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {};
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-black">Welcome Back</h3>
        <p className="text-sm text-slate-700 mt-1.25 mb-6">
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

          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg mb-4"
          >
            Log In
          </button>

          <p className="text-[13px] text-slate-800">
            Don't have an account?{" "}
            <Link className="text-primary font-medium underline" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
