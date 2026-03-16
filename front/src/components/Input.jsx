import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, type, label, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <label className="text-[14px] text-slate-700">{label}</label>
      <div className="input-box mt-1">
        <input
          value={value}
          type={"password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                className="cursor-pointer"
                width={20}
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor-pointer"
                width={20}
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
