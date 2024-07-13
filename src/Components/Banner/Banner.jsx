import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import "./Banner.css";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import img4 from "../../assets/banner4.jpg";
import img5 from "../../assets/banner5.jpg";
import img6 from "../../assets/banner6.jpg";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="flex max-h-[100-60vh] gap-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-[69.5%]"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-full relative" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-full relative" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full h-full relative" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full h-full relative" />
        </SwiperSlide>

        <div
          className="autoplay-progress w-10 absolute bottom-0 right-0 text-primary opacity-0"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* side ad */}
      <div className="w-1/3 flex flex-col gap-16 h-[60vh]">
        <div>
          <img src={img5} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={img6} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
