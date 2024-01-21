import React from "react";

import { cn } from "../../utils/twMerge";
import "../../output.css";

export const TextInput = ({ label, className }) => {
    return (
        <>
            <input className={cn("", className)} placeholder={label}/>
        </>
    )
};
