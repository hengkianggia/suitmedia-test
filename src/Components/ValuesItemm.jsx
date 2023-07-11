import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ValuesItemm = ({ image, title, right, className, warna, text }) => {
  return (
    <div className="w-[31.5%] flex items-center relative">
      <div
        className={`w-[100%] flex flex-col items-center px-5 py-8 bg-${warna} gap-3 text-white`}
      >
        <span>
          <img src={image} alt={title} className={`h-10 ${className} w-10`} />
        </span>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-center text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          quis natus autem nisi magnam dolorem maxime vitae, eum consectetur
          quibusdam.
        </p>
      </div>
      {right ? (
        <div className={`text-4xl -z-10 text-${warna} absolute -right-6`}>
          <AiOutlineCaretRight />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ValuesItemm;
