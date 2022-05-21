// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../src/global.css";

export function Welcome() {
  return (
    <section className="relative">
      <div className="flex flex-col z-[2] items-center absolute text-center text-white top-1/3 bottom-1/3">
        <h1 className="flex text-7xl font-bold">Muito bem-vindo!</h1>
        <p className="w-[40ch] font-semibold text-2xl">
          Temos as melhores soluções em sistemas de geração solar fotovoltaica.
        </p>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        className="mySwiper"
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          {" "}
          <img
            className="h-[calc(100vh-4rem)] w-full"
            src="/img1.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[calc(100vh-4rem)] w-full"
            src="/img2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[calc(100vh-4rem)] w-full"
            src="/img3.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[calc(100vh-4rem)] w-full"
            src="/home-img1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
