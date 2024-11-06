import React, { useState } from "react";
import styles from "../style";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Vortex } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
function FeedBackCard() {
  const [isClicked, setClicked] = useState(false);

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
  const sentMail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (email == "" || subject == "" || message == "") {
      showToast("Please fill all the field");
      return;
    }
    setClicked(true);
    btn.disabled = true;
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

        setClicked(false);
      })
      .catch((er) => {
        console.error(er);
        showToast("Something went wrong, please try again later");
        setClicked(false);
      });
  };

  return (
    <div
      id="contact-form"
      className=" flex justify-between flex-col px-10 py-12 rounded-[20px] w-full  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <h4 className={`${styles.heading2} text-cyan-200 font-poppins`}>
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
      <label htmlFor="email" className="block text-slate-200">
        Email
      </label>
      <input
        type="text"
        id="email"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Enter your Email"
      />
      <label htmlFor="subject" className="block text-slate-200 ">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        className="mt-1 p-2 border bg-black-gradient rounded-md w-full border-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Enter your Subject"
      />
      <label htmlFor="message" className="block text-slate-200 ">
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
        id="submit-btn"
        className={`py-4 px-6 mt-4 bg-blue-gradient flex justify-center font-poppins font-medium text-[22px] text-primary outline-none rounded-[10px]`}
        onClick={sentMail}
      >
        Submit
        <Vortex
          visible={isClicked}
          height="50"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          width="50"
          wrapperStyle={{}}
          wrapperClass="ml-4 mt-[-9px] "
        />
      </button>

      <ToastContainer />
    </div>
  );
}

export default FeedBackCard;
