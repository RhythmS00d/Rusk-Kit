import React from "react";
import './style.css'

export const Button = ({
  label="Button",
  style,
}) => {
  return (
    <>
      <button className='button' style={style}>
        {label}
      </button>
    </>
  );
};
