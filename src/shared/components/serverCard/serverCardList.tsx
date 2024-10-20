import React from "react";

import { IServer } from "@/shared/consts/consts";

import { ServerCard } from "./serverCard";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  servers: IServer[];
}

export const ServerCardList: React.FC<Props> = ({ className, servers }) => {
  return (
    <ul className={cn("flex flex-col gap-[18px]", className)}>
      {servers.map((server) => (
        <li key={server.title}>
          <ServerCard server={server} />
        </li>
      ))}
    </ul>
  );
};
