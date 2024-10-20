"use client";

import Autoplay from "embla-carousel-autoplay";

import { Ads } from "@/shared/components/ads/ads";
import { Container } from "@/shared/components/container";
import { EmployeeCardCarousel } from "@/shared/components/employeeCard/employeeCardCarousel";
import { ServerCardList } from "@/shared/components/serverCard/serverCardList";
import { serverList } from "@/shared/consts/consts";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

export default function HomePage() {
  return (
    <section className="mb-10 mt-10">
      <Container>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {new Array(5).fill(0).map((_, i) => (
              <CarouselItem key={i}>
                <Ads />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <EmployeeCardCarousel />
        <ServerCardList servers={serverList} />
      </Container>
    </section>
  );
}
