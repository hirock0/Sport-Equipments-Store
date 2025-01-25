import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banners = [
  {
    id: 0,
    vidUrl:
      "https://res.cloudinary.com/dusp1j4e0/video/upload/v1733290867/Other_Images/hero_2_yvyich.mp4",
  },
  {
    id: 1,
    vidUrl:
      "https://res.cloudinary.com/dusp1j4e0/video/upload/v1733294097/Other_Images/banner_4_gdaxqr.mp4",
  },
  {
    id: 2,
    vidUrl:
      "https://res.cloudinary.com/dusp1j4e0/video/upload/v1733293112/Other_Images/hero_3_kvp0wy.mp4",
  },
];

const Hero_Section = () => {
  return (
    <div className=" overflow-hidden">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {Banners.map((item, index) => (
          <SwiperSlide key={index}>
            <section className={` relative max-md:h-[300px]  `}>
              <video
                src={item.vidUrl}
                autoPlay
                loop
                muted
                preload="metadata"
                controls={false}
                disablePictureInPicture
                className=" h-full object-cover w-full"
              />
              <div className=" absolute text-base-100 h-1/2 flex justify-center left-0 right-0 bottom-0 container mx-auto px-5">
                <button className=" bg-red-600 h-fit px-5 py-2 rounded-sm shadow-lg ">
                  Buy Now
                </button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero_Section;
