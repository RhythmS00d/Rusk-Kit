import React from "react";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const Button = ({ label = "Button", className = "", ...props }) => {
  return (
    <>
      <button
        className={cn("w-32 h-12 text-2xl bg-blue-600 text-white rounded-md active:outline-blue-400", className)}
        title="This is a button"
        {...props}
      >
        {label}
      </button>
    </>
  );
};
