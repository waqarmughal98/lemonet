import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaBtc,
  FaGoogle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="relative text-center">
        <div className="absolute my-auto lg:top-0 bottom-48 lg:bottom-48 z-10 flex items-center lg:grid h-fit right-20 lg:right-6 text-white bg-white bg-opacity-30 px-4 py-6 rounded-full space-x-6 lg:space-x-0 space-y-0 lg:space-y-6">
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaBtc className="cursor-pointer" />
          <FaGoogle className="cursor-pointer" />
        </div>
        <div className="relative w-full h-full bg-gradient-to-br from-secondary to-primary text-center">
          <div className="relative mx-auto w-full lg:w-2/5 px-4 lg:px-0 space-y-8 py-52 lg:py-40 text-center">
            <div className="absolute -left-48 top-28">
              <img src="./images/h-left.png" alt="" />
            </div>

            <div className="absolute -right-60 bottom-24">
              <img src="./images/h-right.png" alt="" />
            </div>

            <h1 className="text-white font-secondary font-bold text-5xl">
              The 1st Social Network where likes have value
            </h1>

            <p className="text-white text-xl">
              LEMON provides a unique way for Users to create, post & profit
              from their content. Based on other users opinion. Your opinion
              matters
            </p>

            <div className="flex flex-row mx-auto justify-center space-x-4">
              <button className="btn-secondary font-medium flex items-center px-2">
                <span className="px-4">Lemon Pre-sale</span>
                <img src="./images/sec-icon.png" alt="" />
              </button>

              <button className="btn-secondary font-medium flex items-center px-2">
                <span className="px-4">White Paper</span>
                <img src="./images/sec-icon.png" alt="" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8">
            <img src="./images/h-wave.png" alt="" />
          </div>

          <div className="abosulte bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,74.7C672,85,768,139,864,149.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
