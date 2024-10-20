import React from "react";

import { Header } from "@/shared/components/header/header";
import { Nav } from "@/shared/components/nav/nav";

export default function BaseLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mb-[100px] mt-[100px] flex-[1_1_auto]">{children}</main>
      <Nav />
    </div>
  );
}
