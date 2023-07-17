import { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
  open: boolean;
}

const Modal: FC<props> = ({ children, open }) => {
  if (open)
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-black/60">
        {children}
      </div>
    );

  return null;
};

export default Modal;
