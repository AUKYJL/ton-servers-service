import { forwardRef } from "react";

import { Container } from "../container";

import { NavList } from "./navList";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Nav = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "fixed bottom-0 left-0 w-full border-t-[1px] border-t-[#555996] bg-black py-4",
        props.className,
      )}
    >
      <nav>
        <Container>
          <NavList />
        </Container>
      </nav>
    </footer>
  );
});

Nav.displayName = "Nav";
