import useTheme from "../hooks/useThemes";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const ButtonTheme = () => {
  const { toggle, currentTheme } = useTheme();
  return (
    <button
      onClick={toggle}
      className="absolute top-4 right-4 p-4 rounded-full bg-white dark:bg-[#2E8A99]">
      {currentTheme === "dark" ? (
        <BsFillMoonFill className="text-white " />
      ) : (
        <BsSunFill className="text-[#2E8A99]" />
      )}
    </button>
  );
};

export default ButtonTheme;
