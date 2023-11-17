import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
        focus-visible:ring-ring 
        w-auto 
        rounded-full
        border
        border-transparent
        bg-black 
        px-5 
        py-3 
        font-semibold
        text-white
        ring-offset-white
        transition
        hover:opacity-75
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
      `,
          disabled && "cursor-not-allowed opacity-75",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
