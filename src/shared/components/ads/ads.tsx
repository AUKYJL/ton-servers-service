import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  imgUrl: string;
}

export const Ads: React.FC<Props> = ({ className, imgUrl }) => {
  return (
    <div className={className}>
      <h2 className="mb-2 text-[12px] font-medium text-[#CBCACA]">
        Недорогие курсы по Python
      </h2>
      <Image
        className="h-[100px] w-full object-cover"
        src={imgUrl}
        width={0}
        height={0}
        sizes="100vw"
        alt="ads"
      />
    </div>
  );
};
