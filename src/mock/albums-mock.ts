import { Album } from "../models/Album";

const data: Album[] = [
  {
    id: 1,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 2,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 3,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 4,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 5,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 6,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 7,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 8,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 9,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 10,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 11,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
  {
    id: 12,
    title: "Quran",
    price: "300 D.A",
    coverUrl: "https://www.sifatusafwa.com/19021/cart_default.jpg",
  },
];

export function getdata() {
  return new Promise<Album[]>((res, rej) => {
    setTimeout(() => res(data), 1000);
  });
}
