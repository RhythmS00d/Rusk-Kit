import React, { useState } from "react";
import { Input } from "../Input/Input";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { cn } from "../../utils/twMerge";

import "../../output.css";

export const PasswordInput = ({className, ...props }) => {
    const [showPass, setShowPass] = useState(false)
  return (
    <>
      <div className={cn("flex items-center gap-1", className)}>
        <Input type={showPass ? "text" : "password"} {...props} />
        {showPass ? (
          <FaEye
            className="cursor-pointer"
            onClick={() => setShowPass((prev) => !prev)}
          />
        ) : (
          <FaEyeSlash
            className="cursor-pointer"
            onClick={() => setShowPass((prev) => !prev)}
          />
        )}
      </div>
    </>
  );
};
