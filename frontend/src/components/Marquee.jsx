import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Marquee() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-t from-main via-black/5 to-subMain/30  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="medium"
      />
      <InfiniteMovingCards
        items={testimonialsTwo}
        direction="left"
        speed="medium"
      />
    </div>
  );
}

const testimonials = [
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3396_x3elqv.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3395_bywlhi.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3393_obbqrx.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3390_c4yupl.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3389_lnyiry.webp",
  },
];
const testimonialsTwo = [
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258281/IMG_3398_ehgq4q.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3402_jxmrms.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3397_dy9hw7.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3401_g280zg.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3391_m3qnie.webp",
  },
];
