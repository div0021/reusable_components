import clsx, { ClassValue } from "clsx";
import React, { MouseEvent, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router";

type Props = {};
type focusState = {
  button: boolean;
  input: boolean;
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const Sidebar = (props: Props) => {
  const [inFocus, setInFoucus] = useState<focusState>({
    button: true,
    input: false,
  });
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setInFoucus({
        button: true,
        input: false,
      });
    } else if (location.pathname === "/input") {
      setInFoucus({
        button: false,
        input: true,
      });
    }
  }, [location]);

  return (
    <div className="w-full h-full flex lg:flex-col items-center font-NotoSans font-medium justify-around lg:justify-between">
      <h1 className="text-2xl font-bold"><span className="text-[#F7542e]">Com</span><span>ponents</span></h1>
      <div className="space-x-5 lg:space-x-0 lg:space-y-5 flex lg:flex-col justify-center items-center">
        <Link
          className={cn(
            "cursor-pointer hover:font-bold hover:text-[#090f31] text-[#9e9e9e] text-lg",
            {
              "text-[#090f31] font-bold": inFocus.button,
            }
          )}
          to="/"
        >
          Buttons
        </Link>
        <Link
          className={cn(
            "cursor-pointer hover:font-bold hover:text-[#090f31] text-[#9e9e9e] text-lg",
            {
              "text-[#090f31] font-bold": inFocus.input,
            }
          )}
          to="/input"
        >
          Inputs
        </Link>
      </div>
      <div>
        <p className="font-bold text-secondary/50 text-xs">
          Don't copy just learn!!
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
