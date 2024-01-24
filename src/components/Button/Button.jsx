import React from "react";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const Button = ({ label = "Button", className = "", ...props }) => {
  return (
    <>
      <button
        className={cn(
          "w-32 h-12 text-2xl bg-blue-500 hover:bg-blue-700 text-white rounded-md ",
          className
        )}
        title="This is a button"
        {...props}
      >
        {label}
      </button>
    </>
  );
};
