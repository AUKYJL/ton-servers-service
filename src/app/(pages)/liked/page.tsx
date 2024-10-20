import { IoIosMore } from "react-icons/io";

import { Container } from "@/shared/components/container";
import { ServerCardList } from "@/shared/components/serverCard/serverCardList";
import { serverList } from "@/shared/consts/consts";
import { Button } from "@/shared/ui/button";

import { cn } from "@/lib/utils";

export default function LikedPage() {
  const categories = ["russia", "germany"];
  const activeBtns = [true, false, false];
  return (
    <>
      <section>
        <div className="bg-gradient-to-b from-[#050745] to-[#040F43]/50 py-[8px]">
          <Container>
            <div className="">
              <div className="mb-[21px] flex items-center justify-between">
                <p>Избранное</p>
                <IoIosMore className="cursor-pointer" />
              </div>
              <div className="mb-[24px] flex gap-2">
                <Button
                  className={cn(
                    activeBtns[0] ? "bg-[#00026B]" : "",
                    "duration-300",
                  )}
                >
                  Все {serverList.length}
                </Button>
                {categories.map((category, index) => (
                  <Button
                    className={cn(
                      activeBtns[index + 1] ? "bg-[#00026B]" : "",
                      "duration-300",
                    )}
                    key={category}
                  >
                    {category}{" "}
                    {
                      serverList.filter(
                        (server) => server.category === category,
                      ).length
                    }
                  </Button>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="">
            <ServerCardList servers={serverList} />
          </div>
        </Container>
      </section>
    </>
  );
}
