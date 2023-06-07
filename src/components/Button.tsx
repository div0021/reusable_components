import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// syntax cva(baseStyling,styling,defaultStyling)
const buttonVariants = cva(
  "hover:cursor-pointer font-semibold text-sm text-black bg-default hover:bg-h_default focus:bg-h_default focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "bg-transparent  border-2 border-outline text-outline hover:bg-h_primary/10 focus:bg-h_primary/10",
        text: "bg-transparent text-outline hover:bg-h_primary/10 focus:bg-h_primary/10",
      },
      size: {
        default: "w-32 h-14 rounded-lg",
        sm: "w-28 h-12 rounded-md",
        md: "w-32 h-14 rounded-lg",
        lg: "w-36 h-16 rounded-xl",
      },
      colors: {
        default: "",
        primary: "bg-primary text-white hover:bg-h_primary focus:bg-h_primary",
        secondary:
          "bg-secondary text-white hover:bg-h_secondary focus:bg-h_secondary",
        danger: "bg-danger text-white hover:bg-h_danger focus:bg-h_danger",
      },
    },
    defaultVariants: {
      // variant:'default',
      size: "default",
    },
  }
);

type Icons =
  | "add_shopping_cart"
  | "store"
  | "storefront"
  | "credit_card"
  | "account_balance_wallet";

interface NewButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // custom properties

  disabled?: boolean;
  disableShadow?: boolean;

  startIcon?: Icons;
  endIcon?: Icons;
}

const Button: FC<NewButtonProps> = ({
  className,
  size,
  variant,
  colors,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  const isLoading = true;

  let str = "";
  if (variant && colors) {
    if (variant === "outline") {
      if (colors === "primary") {
        str = `text-primary bg-transparent border-2 border-primary hover:bg-h_primary/10 focus:bg-h_primary/10`;
      } else if (colors === "secondary") {
        str = `text-secondary bg-transparent border-2 border-secondary hover:bg-h_secondary/10 focus:bg-h_secondary/10`;
      } else if (colors === "danger") {
        str = `text-danger bg-transparent border-2 border-danger hover:bg-h_danger/10 focus:bg-h_danger/10`;
      }
    } else if (variant === "text") {
      if (colors === "primary") {
        str = `text-primary bg-transparent hover:bg-h_primary/10 focus:bg-h_primary/10`;
      } else if (colors === "secondary") {
        str = `text-secondary bg-transparent  hover:bg-h_secondary/10 focus:bg-h_secondary/10`;
      } else if (colors === "danger") {
        str = `text-danger bg-transparent  hover:bg-h_danger/10 focus:bg-h_danger/10`;
      }
    }
  }

  if (disabled) {
    colors = "default";
    str =
      "hover:cursor-default font-semibold text-sm  pointer-events-none border-[#9e9e9e] text-[#9e9e9e]";
  }

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, colors, className }),
        {
          [str]: isLoading,
        },
        "flex justify-center items-center space-x-1"
      )}
      {...props}
    >
      {startIcon && (
        <span className="material-symbols-rounded">{startIcon}</span>
      )}
      <span>Default</span>
      {endIcon && <span className="material-symbols-rounded">{endIcon}</span>}
    </button>
  );
};

export default Button;
