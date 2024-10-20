"use client";

import { AdsCarousel } from "@/shared/components/ads/adsCarousel";
import { Container } from "@/shared/components/container";
import { EmployeeCardCarousel } from "@/shared/components/employeeCard/employeeCardCarousel";
import { ServerCardList } from "@/shared/components/serverCard/serverCardList";
import { serverList } from "@/shared/consts/consts";

export default function HomePage() {
  return (
    <>
      <section className="mb-10 mt-10">
        <Container>
          <AdsCarousel />
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="mb-[20px] text-[#CBCACA]">Найм сотрудников </h2>
          <EmployeeCardCarousel className="mb-3" />
        </Container>
      </section>
      <section>
        <Container>
          <ServerCardList servers={serverList} />
        </Container>
      </section>
    </>
  );
}
