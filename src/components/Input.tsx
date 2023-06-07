import { VariantProps, cva } from "class-variance-authority";
import clsx, { ClassValue } from "clsx";
import { InputHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";
import { useState, useEffect, useRef, ChangeEvent } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const inputDivVariants = cva(
  "w-60 h-14 border border-[#828282] rounded-lg text-[#828282] text-lg font-NotoSans font-sm flex items-center justify-between p-3 hover:border-[#333333]",
  {
    variants: {
      sizes: {
        md: "",
        sm: "h-10",
      },
      row: {
        "1": " p-0 border-0",
        "2": "h-16 p-0 border-0",
        "3": "h-20 p-0 border-0",
        "4": "h-24 p-0 border-0",
        "5": "h-28 p-0 border-0",
        "6": "h-32 p-0 border-0",
        "7": "h-36 p-0 border-0",
        "8": "h-40 p-0 border-0",
      },
    },
   
  }
);
const textAreaVariant = cva(
  "h-14 p-3 w-60 focus:text-[#333333] focus:outline-none resize-none tracking-wider border border-[#828282] rounded-lg hover:border-[#333333] focus:border-primary",
  {
    variants: {
      row: {
        "1": "",
        "2": "h-16",
        "3": "h-20",
        "4": "h-24",
        "5": "h-28",
        "6": "h-32",
        "7": "h-36",
        "8": "h-40",
      },
    },
  }
);

const inputVariants = cva(
  "w-44 max-w-[11rem] max-h-[1.75rem] h-6 focus:outline-none focus:text-[#333333]",
  {
    variants: {
      sizes: {
        md: "",
        sm: "h-4 text-xs tracking-wide",
      },
    },
 
  }
);
type Icons =
  | "lock"
  | "call"
  | "account_balance"
  | "savings"
  | "fastfood"
  | "account_circle";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputDivVariants> {
  multiline?: boolean;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: Icons;
  endIcon?: Icons;
  fullWidth?: boolean;
  //row?:number
}

const Input: FC<InputProps> = ({
  className,
  sizes,
  multiline,
  disabled,
  error,
  helperText,
  startIcon,
  fullWidth,
  endIcon,
  value,
  row,
  ...props
}) => {
  const [highlight, setHighlight] = useState<boolean>(false);
  const [label, setLabel] = useState<boolean>(false);
  const tempValue = value
    ? value
        .toString()
        .replace(
          value.toString().charAt(0),
          value.toString().charAt(0).toLocaleUpperCase()
        )
    : "";
  const [result, setResult] = useState<string | number | readonly string[]>(
    tempValue
  );
  const ref = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (
      document.activeElement === ref.current ||
      document.activeElement === ref1.current
    ) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [highlight, label]);
  if (multiline) {
    startIcon = undefined;
    endIcon = undefined;
    sizes = undefined;
    row = row ? row : "1";
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // use ChangeEvent instead of ChangeEventHandler
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    setResult(value);
  };

  return (
    <div className="space-y-1 hover:text[#333333]">
      <label
        className={cn("text-xs", {
          "text-primary hover:text-primary": highlight,
          "text-danger hover:text-[#333333]": error,
          "text-[#333333]": label && error,
        })}
      >
        Label
      </label>
      <div
        className={cn(inputDivVariants({ sizes, row, className }), {
          "border-primary hover:border-primary": highlight,
          "border-danger hover:border-[#333333]": error,
          "bg-default cursor-not-allowed border-none pointer-events-none":
            disabled,
          "justify-start space-x-2": startIcon,
          "w-[55rem] lg:w-[60rem]": fullWidth,
        })}
        onMouseEnter={() => setLabel(true)}
        onMouseLeave={() => setLabel(false)}
      >
        {startIcon && (
          <span className="material-symbols-rounded">{startIcon}</span>
        )}
        {!multiline ? (
          <input
            type="text"
            name="first"
            placeholder="Placeholder"
            className={cn(inputVariants({ sizes }), {
              "bg-default cursor-not-allowed border-none pointer-events-none":
                disabled,
              "max-w-full w-[calc(100%-15rem)]": fullWidth,
            })}
            ref={ref}
            onFocus={() => setHighlight(true)}
            onBlur={() => setHighlight(false)}
            value={result}
            onChange={handleChange}
            {...props}
          />
        ) : (
          <textarea
            placeholder="Placeholder"
            className={cn(textAreaVariant({ row }), { "border-danger": error })}
            ref={ref1}
            onFocus={() => setHighlight(true)}
            onBlur={() => setHighlight(false)}
            value={result}
            onChange={handleChange}
          />
        )}
        {endIcon && <span className="material-symbols-rounded">{endIcon}</span>}
      </div>

      {helperText && (
        <p
          className={cn("font-normal text-xs text-[#828282]", {
            "text-danger": error,
            "text-[#828282] hover:text-[#828282]": highlight,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
