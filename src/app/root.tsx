"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Image from "next/image";
import React, { useEffect } from "react";

import { useDidMount } from "@/shared/hooks/useDidMount";

import { useUserStore } from "@/store/user";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Root: React.FC<Props> = ({ className, children }) => {
  const didMount = useDidMount();

  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (didMount) {
      const telegram_user = window.Telegram.WebApp.initDataUnsafe.user;
      setUser(telegram_user || null);
    }
  }, [didMount]);

  return didMount ? (
    <TonConnectUIProvider
      manifestUrl={`${process.env.NEXT_PUBLIC_APP_URL}/tonconnect-manifest.json`}
    >
      {children}
    </TonConnectUIProvider>
  ) : (
    <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
      <Image
        width={100}
        height={100}
        src="/img/loading.gif"
        alt="country"
        className="rounded-[50%]"
      />
      <p className="text-center">Загрузка...</p>
    </div>
  );
};
