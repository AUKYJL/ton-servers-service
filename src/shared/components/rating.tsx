import React from "react";
import { IoStarSharp } from "react-icons/io5";

interface Props {
  className?: string;
}

export const Rating: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[12px] text-[#ACACAC]">5.0</span>
      <div className="flex items-center gap-1 text-[#FFF600]">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
      <span className="text-[12px] text-[#0019F5]">32 клиентов</span>
    </div>
  );
};
