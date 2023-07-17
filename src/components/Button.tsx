import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface props {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<props> = ({ text, className, onClick }) => {
  return (
    <button
      className={twMerge(
        "bg-gray-200 dark:bg-[#0E2954] px-4 py-2 rounded-md hover:bg-gray-400",
        className,
      )}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
