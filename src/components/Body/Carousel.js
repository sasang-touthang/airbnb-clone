// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

export default ({ location }) => {
  const image = location.locationImages.map((image) => (
    <SwiperSlide>
      <img className="image_section" src={image.url} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="carousel_container"
    >
      {image}
    </Swiper>
  );
};
