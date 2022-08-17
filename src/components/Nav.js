import React from "react";

const Nav = () => {
  const link = "#";
  return (
    <div className="absolute top-0 left-0 w-full px-4 lg:px-16 py-8 z-20 ">
      <div className="flex flex-row justify-between items-center">
        <div className="flex space-x-12 items-center text-white font-secondary">
          <div className="flex flex-row cursor-pointer items-center relative z-10">
            <img
              src="./images/logo-icon.png"
              className="mr-2"
              alt="logo Icon"
            />
            <h2 className="uppercase text-white text-2xl">LEMONET</h2>
          </div>

          <div className="hidden md:block">
            <div className="nav flex space-x-6 font-semibold">
              <a href={link}>About</a>
              <a href={link}>Why</a>
              <a href={link}>Benifits</a>
              <a href={link}>Token Sale</a>
              <a href={link}>Roadmap</a>
              <a href={link}>FAQs</a>
              <a href={link}>Contacts</a>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-row items-center space-x-6">
            <div className="dropdown">
              <select
                name="lang"
                id="lang"
                className="bg-transparent text-white"
              >
                <option value="eng" defaultValue>
                  English
                </option>
                <option value="sp">Spanish</option>
                <option value="it">Italian</option>
                <option value="de">Dutch</option>
              </select>
            </div>

            <button className="btn-primary-bg font-secondary">
              Connect Wallet
            </button>

            <button className="btn-primary font-secondary uppercase">
              Pre-Sale
            </button>
          </div>
        </div>

        <div className="mobileMenu md:hidden absolute top-0 right-0 z-20">
          <div className="menu relative z-30">
            <div className="options px-12 text-left">
              <a href={link}>About</a>
              <a href={link}>Why</a>
              <a href={link}>Benifits</a>
              <a href={link}>Token Sale</a>
              <a href={link}>Roadmap</a>
              <a href={link}>FAQs</a>
              <a href={link}>Contacts</a>
              <div className="pt-8 space-y-6">
                <div className="dropdown">
                  <select
                    name="lang"
                    id="lang"
                    className="bg-transparent text-white"
                  >
                    <option value="eng" defaultValue>
                      English
                    </option>
                    <option value="sp">Spanish</option>
                    <option value="it">Italian</option>
                    <option value="de">Dutch</option>
                  </select>
                </div>

                <button className="btn-primary-bg font-secondary">
                  Connect Wallet
                </button>

                <button className="btn-primary font-secondary uppercase">
                  Pre-Sale
                </button>
              </div>
            </div>
          </div>
          <div
            className="menu-click-area cursor-pointer relative z-20"
            onClick={() => {
              document.querySelector(".mobileMenu").classList.toggle("active");
            }}
          >
            <svg
              className="x"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 400"
              height="320"
              width="250"
            >
              <g className="top-bars" strokeWidth="4">
                <path className="bar bar1" d="M 178,20 H 202" />
                <path className="bar bar2" d="M 178,29 H 202" />
                <path className="bar bar3" d="M 178,39 H 202" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
