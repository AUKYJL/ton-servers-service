"use client";

import Image from "next/image";
import React from "react";

import { useProfileImgUrl } from "@/shared/hooks/useProfileImgUrl";

import { useUserStore } from "@/store/user";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const UserProfileBtn: React.FC<Props> = ({ className }) => {
  const user = useUserStore((state) => state.user);
  const profileImg = useProfileImgUrl();

  return (
    <div className={cn("flex items-center gap-[12px]", className)}>
      <Image
        src={profileImg ?? ""}
        height={30}
        width={30}
        alt="avatar"
        className="rounded-[50%]"
      />

      <p className="">{user?.username}</p>
    </div>
  );
};
