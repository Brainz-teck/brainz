import React from "react";
import styles from "../style";
import { saas } from "../assets";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />
            <span className="text-gradient">Brainz</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          where innovation meets efficiency. We specialize in seamlessly
          integrating Software as a Service (SaaS) products and building
          tailored applications to enhance their functionality, streamline
          processes, and maximize productivity for businesses of all sizes.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={saas}
          alt="Saas"
          className=" w-[100%] h-[100%] relative z-[5]"
        />
        <div className=" absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-40 white__gradient" />
        <div className=" absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient pink__gradient" />
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
}

export default Hero;
