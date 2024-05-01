import React, { useState } from "react";
import styles from "../style";
import { cross } from "../assets";

import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

function Footer() {
  const [privacy, setPrivacy] = useState(false);
  const [condition, setCondition] = useState(false);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {privacy && (
        <div
          id="privacy-policy"
          className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full text-white font-poppins border-2 px-4 py-4 rounded-lg`}
        >
          <PrivacyPolicy />
          <div className=" pr-3">
            <img
              title="Close"
              src={cross}
              alt="cancel"
              className=" hover:cursor-pointer w-52 "
              onClick={() => setPrivacy(!privacy)}
            />
          </div>
        </div>
      )}

      {condition && (
        <div
          id="terms-conditions"
          className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full text-white font-poppins border-2 px-4 py-4 rounded-lg`}
        >
          <TermsAndConditions />

          <div className=" pr-3">
            <img
              title="Close"
              src={cross}
              alt="cancel"
              className=" hover:cursor-pointer w-52 "
              onClick={() => setCondition(!condition)}
            />
          </div>
        </div>
      )}

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2024 Brainz. All Rights Reserved.{" "}
          <a onClick={() => setPrivacy(!privacy)} href="#privacy-policy">
            Privacy Policy
          </a>
          {"  "} and{"  "}
          <a onClick={() => setCondition(!condition)} href="#terms-conditions">
            Terms & Conditions
          </a>
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <h3 className={`${styles.heading2} text-gradient`}>Brainz</h3>
          {/* {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Footer;
