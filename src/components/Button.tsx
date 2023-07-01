import React, { ComponentPropsWithoutRef } from "react";

const Button = ({
  className,
  children,
}: ComponentPropsWithoutRef<"button">) => {
  const classes = `text-secondary-alabaster px-5 py-2 rounded bg-primary-marineBlue ${className}`;
  return <button className={classes}>{children}</button>;
};

export default Button;
