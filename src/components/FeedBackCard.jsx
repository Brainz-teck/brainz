import React from "react";
import styles from "../style";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FeedBackCard() {
  const sentMail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (name == "" || email == "" || subject == "" || message == "") {
      toast("Please fill all the field", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    };
    fetch("/sentmail", options)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.error(er);
      });
  };

  return (
    <div
      id="contact-form"
      className=" flex justify-between flex-col px-10 py-12 rounded-[20px] w-full  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <h4 className={`${styles.heading2} text-yellow-200 font-poppins`}>
        Write to us
      </h4>
      {/* <label htmlFor="name" className="block text-yellow-200 ">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your name"
      /> */}
      <label htmlFor="email" className="block text-yellow-200 ">
        Email
      </label>
      <input
        type="text"
        id="email"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Enter your Email"
      />
      <label htmlFor="subject" className="block text-yellow-200 ">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Enter your Subject"
      />
      <label htmlFor="message" className="block text-yellow-200 ">
        Message
      </label>
      <textarea
        type="text"
        id="message"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Enter your Message"
      />
      <button
        type="button"
        className={`py-4 px-6 mt-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
        onClick={sentMail}
      >
        Submit
      </button>
      <ToastContainer />
      {/* <img src={quotes} className=" w-[42px] h-[27px] object-contain" />
      <p className=" font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className=" flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className=" flex flex-col ml-4">
          <h4 className=" font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className=" font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default FeedBackCard;
