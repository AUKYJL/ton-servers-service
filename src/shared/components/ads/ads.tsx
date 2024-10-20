import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const Ads: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="mb-2 text-[12px] font-medium text-[#CBCACA]">
        Недорогие курсы по Python
      </h2>
      <Image
        className="w-full"
        src={"/img/ads.png"}
        width={0}
        height={0}
        sizes="100vw"
        alt="ads"
      />
    </div>
  );
};
