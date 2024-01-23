import React, { useEffect, useState } from "react";

import { BsCapslock } from "react-icons/bs";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const Input = ({ label, className, ...props }) => {
  const [capsLock, setCapsLock] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.getModifierState("CapsLock")) setCapsLock(true);
      else setCapsLock(false);
    })
  }, [])

  return (
    <div
      className={cn(
        "w-1/3 h-[30px] flex items-center border-b-2 border-gray-500",
        className
      )}
    >
      <input
        className="focus:outline-none w-full h-full"
        name={label}
        autoComplete="off"
        autoCapitalize="off"
        placeholder={label}
        {...props}
      />
      <span>{capsLock ? <BsCapslock /> : <></>}</span>
    </div>
  );
};
