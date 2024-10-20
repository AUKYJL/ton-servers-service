import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

import { employeesList } from "@/shared/consts/consts";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/carousel";

import { Container } from "../container";

import { EmployeeCard } from "./employeeCard";

interface Props {
  className?: string;
}

export const EmployeeCardCarousel: React.FC<Props> = ({ className }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(employeesList.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className={className}>
      <Container>
        <Carousel
          className="mb-[10px]"
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {employeesList.map((employee, i) => (
              <CarouselItem key={i}>
                <EmployeeCard employee={employee} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center gap-[16px]">
          {new Array(count).fill(0).map((_, i) => (
            <span
              key={i}
              onClick={() => {
                if (!api) {
                  return;
                }
                api.scrollTo(i);
              }}
              className={`${
                i + 1 === current ? "bg-[#00FFFF]" : "bg-[#FFF]"
              } inline-block h-[10px] w-[10px] cursor-pointer rounded-full`}
            ></span>
          ))}
        </div>
      </Container>
    </section>
  );
};
