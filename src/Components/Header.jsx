import React, { useState } from "react";
import bg from "../assets/bg.jpg";
import aboutBg from "../assets/about-bg.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const Header = () => {
  const [showImage, setShowImage] = useState(true);

  const showImageHandler = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <div className="w-full overflow-hidden max-h-[114vh] bg-orange-400 relative">
        {/* image header */}
        {showImage ? (
          <div className="w-full h-full relative">
            <img
              src={bg}
              alt="Header Image"
              className="w-full h-full object-cover object-center"
            />
            <div className="py-4 pl-3 pr-8 bg-black bg-opacity-50 absolute bottom-24 left-40 text-white">
              <p className="text-2xl font-bold">
                THIS IS A PLACE WHERE TECHNOLOGY & <br /> CREATIVITY FUSED INTO
                DIGITAL CHEMISTRY
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              src={aboutBg}
              alt="Header Image"
              className="w-full h-full object-cover object-center"
            />
            <div className="py-4 pl-3 pr-8 bg-black bg-opacity-50 absolute bottom-24 left-40 text-white">
              <p className="text-2xl font-bold">
                WE DON'T HAVE THE BEST BUT WE HAVE THE <br /> GREATEST TEAM
              </p>
            </div>
          </div>
        )}

        {/* next before button */}
        <div className="absolute w-full px-5 top-[50%] flex justify-between">
          <span
            className="p-3 border border-white rounded-full text-white hover:text-black hover:bg-white cursor-pointer"
            onClick={showImageHandler}
          >
            <AiOutlineLeft />
          </span>
          <span
            className="p-3 border border-white rounded-full text-white hover:text-black hover:bg-white cursor-pointer"
            onClick={showImageHandler}
          >
            <AiOutlineRight />
          </span>
        </div>

        {/* dot */}
        {showImage ? (
          <div className="absolute bottom-5 flex gap-3 left-[49%]">
            <div className={`w-4 h-4 bg-white rounded-full`}></div>
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          </div>
        ) : (
          <div className="absolute bottom-5 flex gap-3 left-[49%]">
            <div className={`w-4 h-4 bg-gray-500 rounded-full`}></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
