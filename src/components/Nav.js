import React from "react";

const Nav = () => {
  const link = "#";
  return (
    <div className="absolute top-0 left-0 w-full px-4 lg:px-16 py-8 z-20 ">
      <div className="flex flex-row justify-between items-center">
        <div className="flex space-x-12 items-center text-white font-secondary">
          <div className="flex flex-row cursor-pointer items-center relative z-20">
            <img
              src="./images/logo-icon.png"
              className="mr-2"
              alt="logo Icon"
            />
            <h2 className="uppercase text-white text-2xl">LEMONET</h2>
          </div>

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

        <div className="flex flex-row items-center space-x-6">
          <div className="dropdown">
            <select name="lang" id="lang" className="bg-transparent text-white">
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
  );
};

export default Nav;
