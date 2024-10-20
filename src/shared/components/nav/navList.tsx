import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaSearch, FaWallet } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface INav {
  url: string;
  title: string;
  icon?: React.ReactNode;
}
interface Props {
  className?: string;
}

export const NavList: React.FC<Props> = ({ className }) => {
  const iconSize = 20;
  const navs: INav[] = [
    {
      title: "Поиск",
      url: "/",
      icon: <FaSearch size={iconSize} />,
    },
    {
      title: "Избранное",
      url: "/liked",
      icon: <FaHeart size={iconSize} />,
    },
    {
      title: "Кошелек",
      url: "/wallet",
      icon: <FaWallet size={iconSize} />,
    },
    {
      title: "Профиль",
      url: "/profile",
      icon: <CgProfile size={iconSize} />,
    },
  ];
  return (
    <ul className={cn("flex justify-between", className)}>
      {navs.map((nav) => (
        <li
          key={nav.title}
          className="relative inline-flex flex-1 items-center justify-center p-1 before:absolute before:left-[50%] before:top-[50%] before:z-[-1] before:h-[45px] before:w-[45px] before:translate-x-[-50%] before:translate-y-[-50%] before:transform before:bg-[#0A0FC0] before:blur-[22px]"
        >
          <Link
            href={nav.url}
            className="flex flex-col items-center justify-center text-white"
          >
            {nav.icon}
            <p className="text-sm">{nav.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
