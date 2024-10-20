"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export const SellerInfo: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center gap-[6px]",
        className,
      )}
      onClick={() => router.push("/seller")}
    >
      <Image
        className="h-[26px] w-[26px] rounded-[50%] border-[1px] border-white duration-300 group-hover:border-[#FFF600]/80"
        src="/img/seller.png"
        width={26}
        height={26}
        alt="seller avatar"
      />
      <div className="font-medium text-[#ACACAC] group-hover:text-[#FFF600]/80">
        <p className="mb-[-10px] font-medium duration-300">Вoomsdel03</p>
        <span className="inline-block text-[10px] duration-300">
          Был 6 мин назад
        </span>
      </div>
    </div>
  );
};
