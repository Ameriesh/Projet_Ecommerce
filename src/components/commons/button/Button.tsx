import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "secondary-outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;

};

const Button = ({ variant = "primary", children, className = "", onClick }: ButtonProps) => {
 const baseClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
      ? "btn-primary-outline"
      : variant === "secondary-outline"
      ? "btn-secondary-outline"
      : "btn-primary";

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
