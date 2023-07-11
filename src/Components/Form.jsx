import React, { useState } from "react";

const Form = () => {
  let [enteredName, setEnteredName] = useState("");
  let [enteredEmail, setEnteredEmail] = useState("");
  let [enteredMessage, setEnteredMessage] = useState("");

  const [nameErorr, setNameErorr] = useState(false);
  const [emailErorr, setEmailErorr] = useState(false);
  const [messageErorr, setMessageErorr] = useState(false);

  const nameInputChangehandler = (event) => {
    setEnteredName(event.target.value);
    if (enteredName.trim() !== "") {
      setNameErorr(false);
    }
  };
  const emailInputChangehandler = (event) => {
    setEnteredEmail(event.target.value);
    if (enteredEmail.includes("@")) {
      setEmailErorr(false);
    }
  };
  const messageInputChangehandler = (event) => {
    setEnteredMessage(event.target.value);
    if (enteredMessage.trim() !== "") {
      setMessageErorr(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setNameErorr(true);
    }
    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      setEmailErorr(true);
    }
    if (enteredMessage.trim() === "") {
      setMessageErorr(true);
    }
    if (
      enteredName.trim() !== "" &&
      enteredEmail.trim() !== "" &&
      enteredEmail.includes("@") &&
      enteredMessage.trim() !== ""
    ) {
      setNameErorr(false);
      setEmailErorr(false);
      setMessageErorr(false);

      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");

      window.scrollTo(0, 0);
    }

    console.log(enteredName, enteredEmail, enteredMessage);
  };

  return (
    <>
      <form
        action="submit"
        className="w-[40%] space-y-3"
        onSubmit={submitHandler}
        id="form"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameInputChangehandler}
            className={
              nameErorr ? `border border-red-400 px-3 py-2` : `border px-3 py-2`
            }
            placeholder="Masukkan Nama"
          />
          {nameErorr ? (
            <p className="text-sm text-red-400">This field is required</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailInputChangehandler}
            className={
              emailErorr
                ? `border border-red-400 px-3 py-2`
                : `border px-3 py-2`
            }
            placeholder="Masukkan Email"
          />
          {emailErorr ? (
            <p className="text-sm text-red-400">Invalid email address</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            value={enteredMessage}
            onChange={messageInputChangehandler}
            className={
              messageErorr
                ? `border border-red-400 px-3 py-2 min-h-[120px]`
                : `border px-3 py-2 min-h-[120px]`
            }
            placeholder="Masukkan Email"
          />
          {messageErorr ? (
            <p className="text-sm text-red-400">This field is required</p>
          ) : (
            ""
          )}
        </div>
        <button className="w-full py-2 font-semibold text-white uppercase bg-blue-500">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
