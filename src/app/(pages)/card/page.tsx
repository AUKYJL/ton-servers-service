import { MdOutlineIosShare } from "react-icons/md";

import { Container } from "@/shared/components/container";
import { FieldWithTable } from "@/shared/components/fieldWithTable";
import { OsField } from "@/shared/components/osField";
import { ServerInfo } from "@/shared/components/serverInfo";
import { Button } from "@/shared/ui/button";

export default function CardPage() {
  return (
    <>
      <section>
        <ServerInfo title="Условия аренды и характеристики" />
      </section>
      <section className="mb-[15px]">
        <Container className="flex gap-[8px]">
          <Button className="flex-1">Арендовать</Button>
          <Button className="flex-1" variant="secondary">
            Поделиться <MdOutlineIosShare />
          </Button>
        </Container>
      </section>
      <section>
        <FieldWithTable
          className="mb-[32px]"
          title="Процессор"
          config={{
            hasColumns: true,
            rows: [
              {
                title: "Название ЧПУ",
                desc: "AMD Ryzen 7 7700",
              },
              {
                title: "Частота",
                desc: "3.80 ГГц",
              },
              {
                title: "Количество ядер и потоков",
                desc: "8 ядер, 16 потоков",
              },
            ],
          }}
        />
        <FieldWithTable
          className="mb-[32px]"
          title="Память и жесткие диски"
          config={{
            hasColumns: true,
            rows: [
              {
                title: "Память",
                desc: "32 ГБ DDR4",
              },
              {
                title: "Жесткие диски",
                desc: `2 x 4 ТБ HDD SATA, 2 x 240 ГБ SSD SATA`,
              },
            ],
          }}
        />
        <FieldWithTable
          className="mb-[32px]"
          title="Память и жесткие диски"
          config={{
            hasColumns: false,
            rows: [
              "1 выделенный внешний IPv4-адрес",
              "Канал 100 Мбит/с, трафик неограничен",
              "Подключение к приватной сети",
              "Защита от DDoS-атак на уровнях",
              "L3-L4 модели OSI",
            ],
          }}
        />
        <OsField />
      </section>
    </>
  );
}
