import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  { src: require("../assets/spice1.png"), alt: "Spice 1" },
  { src: require("../assets/spice2.png"), alt: "Spice 2" },
  { src: require("../assets/spice3.png"), alt: "Spice 3" },
  { src: require("../assets/spice4.png"), alt: "Spice 4" },  // new
  { src: require("../assets/spice5.png"), alt: "Spice 5" },  // new
];

export default function SideSpiceSlider() {
  return (
    <div style={styles.sliderContainer}>
      <Swiper
        direction="vertical"
        slidesPerView={1}            // show 1 slide per view (full height)
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        style={{ height: "100vh" }}  // full viewport height
      >
        {images.map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={alt} style={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const styles = {
  sliderContainer: {
    width: "20vw",     // 20% viewport width
    height: "100vh",   // full viewport height
    position: "fixed",
    right: 0,
    top: "0",
    padding: "10px",
    zIndex: 1000,
  },
  img: {
    width: "100%",
    height: "100vh",   // each image takes full height of viewport
    objectFit: "cover",
    borderRadius: "12px",
    cursor: "pointer",
    display: "block",
  },
};
