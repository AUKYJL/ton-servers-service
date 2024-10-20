import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Container } from "./container";

interface Props {
  className?: string;
}

export const OsField: React.FC<Props> = ({ className }) => {
  const osList = [
    {
      title: "Ubuntu",
      imgUrl: "/img/os/ubuntu.png",
    },
    {
      title: "Windows",
      imgUrl: "/img/os/windows.png",
    },
    {
      title: "CentOS",
      imgUrl: "/img/os/centos.png",
    },
  ];
  return (
    <div className={className}>
      <Container>
        <h2 className="mb-[30px] text-[18px] font-medium text-[#DADADB]">
          Программное обеспечение
        </h2>
        <div className="flex items-center justify-between rounded-[16px] bg-[#161A28] px-[12px] py-[18px]">
          <p className="text-[13px] text-[#E8E4E4]">Программное обеспечение</p>
          <div className="w-[50%]">
            <Select>
              <SelectTrigger className="border-none">
                <SelectValue placeholder="Select os"></SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-black text-white">
                {osList.map((os) => (
                  <SelectItem key={os.title} value={os.title}>
                    <div className="flex gap-3">
                      <Image
                        src={os.imgUrl}
                        alt={os.title}
                        width={20}
                        height={20}
                        className="h-[20px] w-[20px] rounded-[50%]"
                      />
                      <p>{os.title}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Container>
    </div>
  );
};
