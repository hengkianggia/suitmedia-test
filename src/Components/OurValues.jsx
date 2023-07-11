import React from "react";
import bank from "../assets/bank.png";
import balance from "../assets/balance-scale.png";
import lightbulb from "../assets/lightbulb-o.png";
import ValuesItemm from "./ValuesItemm";

const dataItem = [
  {
    gambar: lightbulb,
    title: "INNOVATIVE",
    kanan: true,
    kelas: "w-7",
    warna: "red-400",
  },
  {
    gambar: bank,
    title: "LOYALTY",
    kanan: true,
    warna: "green-400",
  },
  {
    gambar: balance,
    title: "RESPECT",
    kanan: false,
    warna: "blue-400",
  },
];

const OurValues = () => {
  return (
    <div className="flex flex-col items-center w-full py-16">
      <h1 className="text-3xl font-semibold uppercase">our values</h1>
      <div className="flex justify-between items-center w-[75%] mt-5">
        {dataItem.map((item, index) => (
          <ValuesItemm
            key={index}
            title={item.title}
            image={item.gambar}
            right={item.kanan}
            className={item.kelas}
            warna={item.warna}
          />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
