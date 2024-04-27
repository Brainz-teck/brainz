import React from "react";

function Button({ style }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${style} rounded-[10px]`}
    >
      <a href={`#contact-form`}>Get Started</a>
    </button>
  );
}

export default Button;
