import React from "react";

const Bar = ({ title, percentage, className }: {title:string, percentage:number, className:string}) => {
  return (
    <div className={className}>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-base font-semibold dark:text-white">{title}</span>
        <span className="text-base font-light dark:text-[#E5E5E5]">
          {percentage}%
        </span>
      </div>
      <progress className="" value={percentage} max="100">
        {" "}
        {percentage}%{" "}
      </progress>
    </div>
  );
};

export default Bar;
