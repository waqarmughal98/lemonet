import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Network = () => {
  return (
    <div>
      <div className="py-20 px-40 justify-center text-center">
        <div className="relative space-y-4">
          <img
            src="./images/network-left.png"
            className="absolute left-40"
            alt=""
          />
          <h1 className="text-primary font-bold font-secondary text-4xl">
            Lemon Network
          </h1>

          <p className="text-para text-lg w-3/4 justify-center mx-auto">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blan
            ditiis praes entium volup tatum deleniti.
          </p>
        </div>

        <div className="swipe-div justify-center mx-auto py-12">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="relative p-8 bg-white text-left z-10 drop-shadow-xl">
                <h1 className="uppercase text-para font-bold text-3xl">
                  Problem
                </h1>

                <h1 className="text-primary font-secondary text-xl pt-4 pb-2">
                  Conventional Social Networks
                </h1>

                <ul className="list-disc list-inside marker:text-primary space-y-2">
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>Wende omnis iste natus error sit volupt.</li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative p-8 bg-white text-left z-10 drop-shadow-xl">
                <h1 className="uppercase text-para font-bold text-3xl">
                  Problem
                </h1>

                <h1 className="text-primary font-secondary text-xl pt-4 pb-2">
                  Conventional Social Networks
                </h1>

                <ul className="list-disc list-inside marker:text-primary space-y-2">
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>Wende omnis iste natus error sit volupt.</li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Network;
