import React from "react";

export const FormAsButton = ({ label = "Button", style, size = "md", ...props }) => {
  const buttonSize = {
    sm: "7em",
    md: "8em",
    l: "11em",
    xl: "13em",
  };
  const fontSize = {
    sm: "1rem",
    md: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
  };
  return (
    <>
      <form
        className="button"
        style={{ width: buttonSize[size], fontSize: fontSize[size], ...style }}
        {...props}
      >
        {label}
      </form>
    </>
  );
};
