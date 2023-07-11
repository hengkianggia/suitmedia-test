import React from "react";
import bank from "../assets/bank.png";
import balance from "../assets/balance-scale.png";
import lightbulb from "../assets/lightbulb-o.png";
import ValuesItemm from "./ValuesItemm";

import { AiOutlineCaretRight } from "react-icons/ai";

// const dataItem = [
//   {
//     gambar: lightbulb,
//     title: "INNOVATIVE",
//     kanan: true,
//     kelas: "w-7",
//     warna: "red-400",
//   },
//   {
//     gambar: bank,
//     title: "LOYALTY",
//     kanan: true,
//     warna: "green-400",
//   },
//   {
//     gambar: balance,
//     title: "RESPECT",
//     kanan: false,
//     warna: "blue-400",
//   },
// ];

const OurValues = () => {
  return (
    <div className="flex flex-col items-center w-full py-16">
      <h1 className="text-3xl font-semibold uppercase">our values</h1>
      <div className="flex justify-between items-center w-[75%] mt-5">
        <div className="w-[31.5%] flex items-center relative">
          <div
            className={`w-[100%] flex flex-col items-center px-5 py-8 bg-red-400 gap-3 text-white`}
          >
            <span>
              <img src={lightbulb} alt="lightbulb" className={`h-10 w-5`} />
            </span>
            <h1 className="text-xl font-semibold">INNOVATIVE</h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quis natus autem nisi magnam dolorem maxime vitae, eum
              consectetur quibusdam.
            </p>
          </div>
          <div className={`text-4xl -z-10 text-red-400 absolute -right-6`}>
            <AiOutlineCaretRight />
          </div>
        </div>

        <div className="w-[31.5%] flex items-center relative">
          <div
            className={`w-[100%] flex flex-col items-center px-5 py-8 bg-green-400 gap-3 text-white`}
          >
            <span>
              <img src={bank} alt="LOYALTY" className={`h-10 w-10`} />
            </span>
            <h1 className="text-xl font-semibold">LOYALTY</h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quis natus autem nisi magnam dolorem maxime vitae, eum
              consectetur quibusdam.
            </p>
          </div>
          <div className={`text-4xl -z-10 text-green-400 absolute -right-6`}>
            <AiOutlineCaretRight />
          </div>
        </div>

        <div className="w-[31.5%] flex items-center relative">
          <div
            className={`w-[100%] flex flex-col items-center px-5 py-8 bg-blue-400 gap-3 text-white`}
          >
            <span>
              <img src={balance} alt="LOYALTY" className={`h-10 w-10`} />
            </span>
            <h1 className="text-xl font-semibold">RESPECT</h1>
            <p className="text-sm text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quis natus autem nisi magnam dolorem maxime vitae, eum
              consectetur quibusdam.
            </p>
          </div>
        </div>

        {/* {dataItem.map((item, index) => (
          <ValuesItemm
            key={index}
            title={item.title}
            image={item.gambar}
            right={item.kanan}
            className={item.kelas}
            warna={item.warna}
          />
        ))} */}
      </div>
    </div>
  );
};

export default OurValues;
