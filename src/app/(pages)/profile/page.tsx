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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Button } from "@/shared/ui/button";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

import { useUserStore } from "@/store/user";

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);
  const profileImg = useProfileImgUrl();
  return (
    <>
      <section className="mb-[20px]">
        <div className="rounded-[16px] bg-gradient-to-b from-[#050745] to-[#040F43]/50 py-[8px]">
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
              <div className="mb-[5px] mt-[23px] rounded-full bg-gradient-to-br from-[#49005C] from-0% via-[#2D0068] via-[percentage:20%_70%] to-[#01017B] to-100% p-1">
                <Image
                  className="h-[172px] w-[172px] rounded-full"
                  src={profileImg}
                  alt={`${user?.first_name} avatar`}
                  width={172}
                  height={172}
                />
              </div>
              <div className="text-center">
                <p className="leading-0 text-[12px] font-semibold text-[#00FFF6]">
                  {user?.is_premium ? "Premium" : "No Premium"}
                </p>
                <p className="mb-[5px] text-[24px]">{user?.first_name}</p>
                <p className="text-[20px] text-[#ACACAC]">{user?.username}</p>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <div className="mb-3 flex items-center justify-between">
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
          <div className="mb-4 flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[8px]">
              <Button variant="secondary" className="w-full">
                Сдать сервер в аренду
              </Button>
              <Button variant="secondary" className="w-full">
                Отправить резюме
              </Button>
            </div>
            <div className="flex-1 rounded-[10px] bg-[#0F121E]"></div>
          </div>
          <div className="">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                  <div className="text-left">
                    <h4 className="text-[16px]">Ваша аренда</h4>
                    <p className="text-[12px] text-[#BFBDBD]">
                      Продлить аренду можно здесь{" "}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                  <div className="text-left">
                    <h4 className="text-[16px]">Лист ожидания </h4>
                    <p className="text-[12px] text-[#BFBDBD]">В ожидании : 2</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                  <div className="text-left">
                    <h4 className="text-[16px]">Отложенные</h4>
                    <p className="text-[12px] text-[#BFBDBD]">В ожидании: 2</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                  <div className="rounded-[10px] bg-[#0F121E] px-3 py-2">
                    server
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
}
