import { IButton } from "../interface/button";

const Button = ({ children, variant, ...props }: IButton) => {
  return <button type={variant} {...props}>{children}</button>;
};

export default Button;
