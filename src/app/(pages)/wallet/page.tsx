"use client";

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

import { Container } from "@/shared/components/container";
import { useDidMount } from "@/shared/hooks/useDidMount";
import { Button } from "@/shared/ui/button";

export default function WalletPage() {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  const didMount = useDidMount();
  //   const wallet = useTonWallet();
  return didMount ? (
    <section className="mt-5">
      <Container className="flex justify-center">
        <Button variant="secondary" onClick={() => tonConnectUI.openModal()}>
          Подключить кошелек
        </Button>
      </Container>
    </section>
  ) : null;
}
