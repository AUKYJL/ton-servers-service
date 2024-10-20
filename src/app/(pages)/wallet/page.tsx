"use client";

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

import { useDidMount } from "@/shared/hooks/useDidMount";
import { Button } from "@/shared/ui/button";

export default function WalletPage() {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  const didMount = useDidMount();
  //   const wallet = useTonWallet();
  return didMount ? (
    <div>
      {/* {wallet?.account} */}
      <Button onClick={() => tonConnectUI.openModal()}>wallet</Button>
    </div>
  ) : null;
}
