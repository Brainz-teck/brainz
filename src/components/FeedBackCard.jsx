import React from "react";
import styles from "../style";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FeedBackCard() {
  const showToast = (message) => {
    toast(message, {
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
  };
  const sentMail = async () => {
    //const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (email == "" || subject == "" || message == "") {
      showToast("Please fill all the field");
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "https://brainz-server.onrender.com/sentmail",
        { email, subject, message },
        options
      )
      .then((res) => {
        if (res.status === 200) {
          showToast("Submitted successfully, We will get back to you zoon...!");
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else showToast("Something went wrong, please try again later");
      })
      .catch((er) => {
        console.error(er);
        showToast("Something went wrong, please try again later");
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
