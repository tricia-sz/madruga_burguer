import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn("mt-4 w-48 rounded-sm py-2 text-xl", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
