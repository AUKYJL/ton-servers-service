import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Container } from "../container";

import { UserProfileBtn } from "./userProfileBtn";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b-[1px] border-b-[#555996] bg-black",
        className,
      )}
    >
      <Container className="flex items-center justify-between py-[15px]">
        <UserProfileBtn />
        <div className="flex items-center justify-center">
          <GiHamburgerMenu size={30} />
        </div>
      </Container>
    </header>
  );
};
