import React from "react";

const Button = ({ name, href, isSecondary, className }) => {
  return (
    <button
      className={`max-w-[168px] rounded-[7px] py-[13px] px-[47px] text-center text-sm font-medium capitalize  transition-all duration-200 hover:bg-[#666666] hover:text-white dark:bg-white dark:text-black dark:hover:bg-[#666666] dark:hover:text-white ${
        isSecondary ? "bg-black text-white" : "bg-white text-black"
      } ${className}`}
    >
      <a href={href}>{name}</a>
    </button>
  );
};

export default Button;
