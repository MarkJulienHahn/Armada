import React from "react";
import { useSwiper } from "swiper/react";

import Image from "next/image";

const ProjectSwiperImage = ({ foto }) => {
  const swiper = useSwiper();

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Image
        placeholder="blur"
        blurDataURL="../public/images/image.jpg"
        src={foto.url}
        layout="fill"
        objectFit="contain"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default ProjectSwiperImage;
