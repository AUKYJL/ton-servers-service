import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SoldServerCard: React.FC<Props> = ({ className }) => {
  const characteristicList = [
    "Xeon E3-1270",
    "3.40 ГГц, 4 ядра, 8 потоков",
    "8 ГБ DDR3",
    "2 x 1 ТБ HDD SATA",
  ];
  return (
    <div
      className={cn(
        "flex cursor-pointer gap-[10px] bg-[#0F121E] duration-300 hover:bg-[#212741]",
        className,
      )}
    >
      <Image
        src="/img/soldServerCard.png"
        width={150}
        height={0}
        alt="sold server card image"
      />
      <div className="p-2">
        <div className="mb-[20px] flex items-center gap-2">
          <Image
            width={20}
            height={20}
            src="/img/russianFlag.png"
            alt="country"
            className="rounded-[50%]"
          />
          <p className="text-[12px] font-medium text-[#9096ED]">
            RootServer 3.60 GHz/64GB
          </p>
        </div>
        <div className="flex flex-col gap-[7px]">
          {characteristicList.map((characteristic) => (
            <p key={characteristic} className="text-[12px] text-[#ACACAC]">
              {characteristic}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
