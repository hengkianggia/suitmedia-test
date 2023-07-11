import React from "react";
import Form from "./Form";

const ContactUS = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col items-center w-full gap-5 py-5 max-w-[1400px]">
        <h1 className="text-3xl font-semibold">CONTACT US</h1>
        <Form />
      </div>
    </div>
  );
};

export default ContactUS;
