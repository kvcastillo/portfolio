import React from "react";
type ButtonProps = {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
};
const Button = ({ children, size }: ButtonProps) => {
  const sizeClass = {
    sm: "px-2 py-3 text-sm w-20 m-auto",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <div
      className={`${sizeClass[size]} border-2 text-center border-[#1C1C1C]  hover:cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Button;
