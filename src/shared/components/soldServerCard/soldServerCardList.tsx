import React from "react";

import { cn } from "@/shared/lib/utils";

import { SoldServerCard } from "./soldServerCard";

interface Props {
  className?: string;
}

export const SoldServerCardList: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cn("flex flex-col gap-[18px]", className)}>
      {new Array(15).fill(0).map((_, index) => (
        <li key={index}>
          <SoldServerCard />
        </li>
      ))}
    </ul>
  );
};
