import React from "react";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className="relative text-center justify-center -mt-4 z-10 py-28 px-32 space-y-6">
      <h1 className="text-primary text-4xl font-bold font-secondary">
        About Lemon
      </h1>

      <p className="text-lg w-4/5 mx-auto text-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna. At vero eos et accusamus et
        iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
        deleniti atque corrupti quos dolores et quas molestias.
      </p>

      <div className="flex w-4/5 mx-auto justify-center rounded-2xl">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls
          width="100%"
          height="500px"
          className="rounded-2xl"
          light="/images/video-overlay.png"
          playIcon={
            <button>
              <img src="/images/video-play-btn.png" alt="" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default About;
