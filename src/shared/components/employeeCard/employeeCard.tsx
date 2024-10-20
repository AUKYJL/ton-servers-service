import Image from "next/image";
import React from "react";

import { IEmployee } from "@/shared/consts/consts";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  employee: IEmployee;
}

export const EmployeeCard: React.FC<Props> = ({ className, employee }) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer gap-[15px] rounded-[8px] bg-[#0F121E] p-2 duration-300 hover:bg-[#2f3859]",
        className,
      )}
    >
      <Image
        className="h-[100px] w-[100px]"
        src={employee.avatarUrl}
        alt="employee avatar"
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <h3 className="mb-1 text-[14px] font-medium text-[#00FFFF]">
          {employee.name}
        </h3>
        <p className="mb-1 text-[12px] text-[#CBCACA]">
          {employee.desc.slice(0, 70)} ...
        </p>
        <span className="self-end text-[12px] text-[#12FF00]">
          {employee.tgId}
        </span>
      </div>
    </div>
  );
};
