import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  CountryImage: string;
  title: string;
  tonAmount: number;
}

export const ServerTitleAndTon: React.FC<Props> = ({
  className,
  CountryImage,
  title,
  tonAmount,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-2">
        <Image
          width={20}
          height={20}
          src={CountryImage}
          alt="country"
          className="rounded-[50%]"
        />
        <p className="text-[12px] font-medium text-[#9096ED]">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[12px]">
          {tonAmount} <span className="text-[9px] text-[#A7A7A7]">мес</span>
        </p>
        <Image
          width={20}
          height={20}
          src="/img/ton.png"
          alt="country"
          className="rounded-[50%]"
        />
      </div>
    </div>
  );
};
