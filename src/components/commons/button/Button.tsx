import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "secondary-outline";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ variant = "primary", children, onClick }: ButtonProps) => {
  const classes =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
      ? "btn-primary-outline"
      : variant === "secondary-outline"
      ? "btn-secondary-outline"
      : "btn-primary";

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
