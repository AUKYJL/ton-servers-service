import React from "react";

import { Button } from "../ui/button";

import { Container } from "./container";
import { Rating } from "./rating";
import { SellerInfo } from "./sellerInfo";
import { ServerTitleAndTon } from "./serverTitleAndTon";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title?: string;
  additionInfo?: boolean;
}

export const ServerInfo: React.FC<Props> = ({
  className,
  title = "",
  additionInfo = true,
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-[#050745] to-[#040F43]/50 py-[8px]",
        className,
      )}
    >
      <Container>
        <div className="">
          <h2 className="mb-[7px] text-[16px] font-medium text-[#CBCACA]">
            {title}
          </h2>
          <div className="mb-[18px]">
            <h3 className="mb-[12px] text-[#CBCACA]">Продавец</h3>
            <div className="flex justify-between">
              <div className="">
                <SellerInfo />
                <Rating />
              </div>
              <div className="flex gap-1">
                <Button className="text-[9px]">Написать</Button>
                <Button variant="secondary" className="text-[9px]">
                  Позвонить
                </Button>
              </div>
            </div>
          </div>
          {additionInfo && (
            <ServerTitleAndTon
              CountryImage="/img/russianFlag.png"
              tonAmount={10.99}
              title="Аренда сервера RD‑40564"
            />
          )}
        </div>
      </Container>
    </div>
  );
};
