import React from "react";

import { Container } from "../container";

import { Menu } from "./menu";
import { UserProfileBtn } from "./userProfileBtn";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Header = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b-[1px] border-b-[#555996] bg-black",
        className,
      )}
    >
      <Container className="flex items-center justify-between py-[15px]">
        <UserProfileBtn />
        <Menu />
      </Container>
    </header>
  );
});
Header.displayName = "Header";
export default Header;
