import React from "react";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const FormAsButton = ({
  label = "Button",
  className,
  size = "md",
  ...props
}) => {
  return (
    <>
      <form
        className={cn(
          "w-32 h-12 text-2xl bg-blue-500 hover:bg-blue-700 text-white rounded-md cursor-pointer flex items-center justify-center",
          className
        )}
        {...props}
      >
        {label}
      </form>
    </>
  );
};
