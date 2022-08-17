import React from "react";

const CreatorToC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-32 py-20 gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-20">
      <div className="relative space-y-6">
        <img
          src="./images/ctc-left.png"
          className="absolute top-0 -left-16"
          alt=""
        />
        <h1 className="text-primary font-secondary text-[44px]">
          Creator-To-Consumer Decentralize Platform
        </h1>

        <p className="text-para font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <p className="text-para">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia
        </p>

        <p className="text-para">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore
        </p>
      </div>

      <div className="relative grid items-center">
        <img src="./images/creator-gfx.png" alt="" />
        <img
          src="./images/ctc-right.png"
          className="absolute -bottom-12 -right-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default CreatorToC;
