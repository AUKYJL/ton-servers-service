"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";

import { Container } from "@/shared/components/container";
import { useProfileImgUrl } from "@/shared/hooks/useProfileImgUrl";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

import { useUserStore } from "@/store/user";

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);
  const profileImg = useProfileImgUrl();
  return (
    <>
      <section className="mb-[20px]">
        <div className="bg-gradient-to-b from-[#050745] to-[#040F43]/50 py-[8px]">
          <Container>
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IoIosMore size={20} className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-md bg-black p-2">
                  <DropdownMenuItem>Copy</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col items-center">
              <Image
                className="mb-[20px] mt-[23px] h-[172px] w-[172px] rounded-[50%]"
                src={profileImg}
                alt={`${user?.first_name} avatar`}
                width={172}
                height={172}
              />
              <div className="text-center">
                <p className="mb-[5px] text-[24px]">{user?.first_name}</p>
                <p className="text-[20px] text-[#ACACAC]">{user?.username}</p>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <div className="flex items-center justify-between">
            <p>Баланс</p>
            <div className="flex items-center gap-2">
              <p>1009,997</p>
              <Image
                width={36}
                height={36}
                src="/img/ton.png"
                alt="country"
                className="rounded-[50%]"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
