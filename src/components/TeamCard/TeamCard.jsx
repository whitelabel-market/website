import React from "react";

const TeamCard = ({ name, role, imgUrl, className }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <img
        className="mb-4 w-96 rounded-lg lg:rounded-none"
        src={imgUrl}
        alt=""
      />
      <p className="text-sm dark:text-white">Hi! My name</p>
      <h3 className="text-xl font-bold dark:text-white">{name}</h3>
      <p className="text-[10px] dark:text-white">{role}</p>
    </div>
  );
};

export default TeamCard;
