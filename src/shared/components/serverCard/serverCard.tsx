"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { IServer } from "@/shared/consts/consts";

import { ServerTitleAndTon } from "../serverTitleAndTon";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  server: IServer;
}

export const ServerCard: React.FC<Props> = ({ className, server }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/card")}
      className={cn(
        "cursor-pointer rounded-md bg-[#0F121E] px-3 py-2 duration-300 hover:bg-[#2f3859]",
        className,
      )}
    >
      <ServerTitleAndTon
        className="mb-2"
        CountryImage={server.imgUrl}
        tonAmount={server.tonAmount}
        title={server.title}
      />
      <div className="mb-2 text-[11px] text-[#ACACAC]">
        <ul className="flex flex-wrap gap-[12px]">
          {server.characteristics.map((characteristic) => (
            <li key={characteristic}>{characteristic}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <div className="inline-block border-b-[1px] border-b-white">
          <Link className="flex items-center gap-1" href={""}>
            <span className="text-[#9096ED]">Арендовать</span>
            <Image width={22} height={12} src="/icons/cart.svg" alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};
