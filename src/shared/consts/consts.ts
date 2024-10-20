export interface IServer {
  title: string;
  imgUrl: string;
  category: string;
  tonAmount: number;
  characteristics: string[];
}

export const serverList: IServer[] = [
  {
    title: "Аренда сервера RD‑40564",
    imgUrl: "/img/russianFlag.png",
    category: "russia",
    tonAmount: 10.99,
    characteristics: [
      "Xeon E3-1270",
      "3.40 ГГц, 4 ядра, 8 потоков",
      "8 ГБ DDR3",
      "2 x 1 ТБ HDD SATA",
    ],
  },
  {
    title: "RootServer 3.60 GHz/64GB",
    imgUrl: "/img/germanyFlag.png",
    category: "germany",
    tonAmount: 10.99,
    characteristics: [
      "AMD Ryzen 7 7700 3.80 ГГц 8 ядер, 16 потоков",
      "Ubuntu CentOS Debian Windows",
      "32 ГБ DDR4",
      "2 x 4 ТБ HDD SATA, 2 x 240 ГБ SSD SATA",
    ],
  },
  {
    title: "Аренда сервера RD‑40564",
    imgUrl: "/img/russianFlag.png",
    category: "russia",
    tonAmount: 10.99,
    characteristics: [
      "Xeon E3-1270",
      "3.40 ГГц, 4 ядра, 8 потоков",
      "8 ГБ DDR3",
      "2 x 1 ТБ HDD SATA",
    ],
  },
  {
    title: "RootServer 3.60 GHz/64GB",
    imgUrl: "/img/germanyFlag.png",
    category: "germany",
    tonAmount: 10.99,
    characteristics: [
      "AMD Ryzen 7 7700 3.80 ГГц 8 ядер, 16 потоков",
      "Ubuntu CentOS Debian Windows",
      "32 ГБ DDR4",
      "2 x 4 ТБ HDD SATA, 2 x 240 ГБ SSD SATA",
    ],
  },
  {
    title: "RootServer 3.60 GHz/64GB",
    imgUrl: "/img/germanyFlag.png",
    category: "germany",
    tonAmount: 10.99,
    characteristics: [
      "AMD Ryzen 7 7700 3.80 ГГц 8 ядер, 16 потоков",
      "Ubuntu CentOS Debian Windows",
      "32 ГБ DDR4",
      "2 x 4 ТБ HDD SATA, 2 x 240 ГБ SSD SATA",
    ],
  },
];
