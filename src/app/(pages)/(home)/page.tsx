import { Ads } from "@/shared/components/ads/ads";
import { Container } from "@/shared/components/container";
import { ServerCardList } from "@/shared/components/serverCard/serverCardList";
import { serverList } from "@/shared/consts/consts";

export default function HomePage() {
  return (
    <div>
      <Container>
        <Ads className="mb-5" />
        <ServerCardList servers={serverList} />
      </Container>
    </div>
  );
}
