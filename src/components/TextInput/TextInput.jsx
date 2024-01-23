import React, { useState } from "react";

import { BsCapslock } from "react-icons/bs";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const TextInput = ({ label, className, required = false, value }) => {
  const [capsLock, setCapsLock] = useState(false);

  function handleKeyPress(e) {
    if (e.getModifierState("CapsLock")) setCapsLock(true);
    else setCapsLock(false);
  }

  return (
    <div
      onKeyDown={(e) => handleKeyPress(e)}
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
        required={required}
        placeholder={label}
        value={value}
      />
      <span>{capsLock ? <BsCapslock /> : <></>}</span>
    </div>
  );
};
