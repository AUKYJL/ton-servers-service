"use client";

import React, { createRef, useEffect } from "react";

import Header from "@/shared/components/header/header";
import { Nav } from "@/shared/components/nav/nav";

export default function BaseLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const headerRef = createRef<HTMLDivElement>();
  const navRef = createRef<HTMLDivElement>();
  const mainRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (headerRef.current && navRef.current && mainRef.current) {
      console.log(headerRef.current.offsetHeight);
      console.log(mainRef.current);
      console.log(navRef.current);
      mainRef.current.style.marginTop = `${headerRef.current.offsetHeight}px`;
      mainRef.current.style.marginBottom = `${navRef.current.offsetHeight}px`;
    }
  }, [headerRef, navRef, mainRef]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header ref={headerRef} />
      <main ref={mainRef} className="flex-[1_1_auto]">
        {children}
      </main>
      <Nav ref={navRef} />
    </div>
  );
}
