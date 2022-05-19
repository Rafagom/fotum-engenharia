import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Welcome2(props: { deviceType: string | undefined }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="relative">
      <div className="flex flex-col z-[2] items-center absolute text-center text-white top-1/3 bottom-1/3 -left-1/2 -right-1/2">
        <h1 className="flex text-7xl font-bold">Muito bem-vindo!</h1>
        <p className="w-[40ch] font-semibold text-2xl">
          Temos as melhores soluções em sistemas de geração solar fotovoltaica.
        </p>
      </div>
      <Carousel
        // Carousel.goToSlide(1, true)
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-80-px"
        minimumTouchDrag={80}
        arrows={false}
        // containerClass=""
        shouldResetAutoplay={true}
      >
        <img
          className="h-[calc(100vh-4rem)] w-full"
          src="/home-img1.png"
          alt=""
        />
        <img className="h-[calc(100vh-4rem)] w-full" src="/img1.webp" alt="" />
        <img className="h-[calc(100vh-4rem)] w-full" src="/img2.webp" alt="" />
        <img className="h-[calc(100vh-4rem)] w-full" src="/img3.webp" alt="" />
        <img
          className="h-[calc(100vh-4rem)] w-full"
          src="/img-bottom.jpeg"
          alt=""
        />
      </Carousel>
    </section>
  );
}
