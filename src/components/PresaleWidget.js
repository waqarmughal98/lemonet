import React from "react";

const PresaleWidget = () => {
  return (
    <div className="relative -mt-40 mx-auto flex flex-row text-center justify-center drop-shadow-2xl">
      <div className="bg-white px-16 py-8 rounded-l-xl">
        <h1 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Pre-sale is Live Now
        </h1>

        <p className="pt-4 text-left">Pre-sale ends in:</p>
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
