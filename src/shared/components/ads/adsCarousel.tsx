import Autoplay from "embla-carousel-autoplay";
import React from "react";

import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

import { Ads } from "./ads";

interface Props {
  className?: string;
}

export const AdsCarousel: React.FC<Props> = ({ className }) => {
  const imgs = [
    {
      imgUrl: "/img/ads/01.png",
    },
    {
      imgUrl: "/img/ads/02.png",
    },
    {
      imgUrl: "/img/ads/03.png",
    },
    {
      imgUrl: "/img/ads/04.png",
    },
    {
      imgUrl: "/img/ads/05.png",
    },
  ];
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5_000,
        }),
      ]}
      className="mb-3 w-full"
    >
      <CarouselContent>
        {imgs.map((img, i) => (
          <CarouselItem key={i}>
            <Ads imgUrl={img.imgUrl} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
