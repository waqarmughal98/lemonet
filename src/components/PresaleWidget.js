import React from "react";
import Countdown from "react-countdown";
import "../counter.js";

const PresaleWidget = () => {
  return (
    <div className="relative -mt-40 mx-auto flex flex-row text-center justify-center drop-shadow-2xl">
      <div className="bg-white px-16 py-8 rounded-l-xl">
        <h1 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Pre-sale is Live Now
        </h1>

        <p className="pt-4 text-left">Pre-sale ends in:</p>

        <div class="card text-left text-secondary font-bold text-2xl italic space-x-4">
          <Countdown
            className="tracking-widest space-x-4"
            date={Date.now() + 1000000}
          />
        </div>
        <div className="space-x-8 flex flex-row text-para">
          <p>D</p>
          <p>H</p>
          <p>M</p>
          <p>S</p>
        </div>
      </div>

      <div className="bg-primary py-8 px-12  rounded-r-xl">
        <h1 className="text-white text-left pb-4 font-semibold">Pre Sale</h1>

        <div class="progress">
          <div class="progress-value"></div>
        </div>

        <div className="flex flex-row justify-between text-white pt-2">
          <p>Softcare reached</p>
          <p>124,000 Sold</p>
        </div>
      </div>
    </div>
  );
};

export default PresaleWidget;
