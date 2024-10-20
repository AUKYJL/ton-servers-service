import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

interface Props {
  className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger className="">
        <div className="flex items-center justify-center">
          <GiHamburgerMenu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2 border-none bg-[#0F121E] py-12">
        <Button variant="secondary">Профиль</Button>
        <Button variant="secondary">Кошелек</Button>
        <Button variant="secondary">Выйти</Button>
      </SheetContent>
    </Sheet>
  );
};
