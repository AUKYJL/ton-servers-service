import { MdOutlineIosShare } from "react-icons/md";

import { Container } from "@/shared/components/container";
import { ServerInfo } from "@/shared/components/serverInfo";
import { SoldServerCardList } from "@/shared/components/soldServerCard/soldServerCardList";
import { Button } from "@/shared/ui/button";

export default function SellerPage() {
  return (
    <>
      <section>
        <ServerInfo additionInfo={false} />
      </section>
      <section>
        <Container>
          <Button className="w-full" variant="secondary">
            Поделиться <MdOutlineIosShare />
          </Button>
        </Container>
      </section>
      <section>
        <Container>
          <h2>Успешно проданные серверы</h2>
          <SoldServerCardList />
        </Container>
      </section>
    </>
  );
}
