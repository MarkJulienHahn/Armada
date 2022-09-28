import React from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";

import Image from "next/image";

const ProjectSwiperImage = ({ foto }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Image
        placeholder="blur"
        blurDataURL="../public/images/image.jpg"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${foto.url}`}
        layout="fill"
        objectFit="contain"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default ProjectSwiperImage;
