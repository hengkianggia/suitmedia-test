import React from "react";
import gambarFB from "../assets/facebook-official.png";
import gambarTT from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="grid place-items-center">
      <footer className="w-full flex flex-col items-center py-10 gap-2 mt-8 bg-gray-900 max-w-[1400px]">
        <p className="text-white text-sm">Copyright 2016. PT. Company</p>
        <div className="flex gap-2">
          <a href="">
            <img src={gambarFB} alt="Gambar Facebook" className="w-5" />
          </a>
          <a href="">
            <img src={gambarTT} alt="Gambar Twitter" className="w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
