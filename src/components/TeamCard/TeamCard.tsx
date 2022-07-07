import React from 'react';
import Image, { StaticImageData } from 'next/image';

const TeamCard = ({
  name,
  role,
  imgUrl,
  className,
}: {
  name: string;
  role: string;
  imgUrl: StaticImageData;
  className: string;
}) => {
  return (
    <div className={`${className} flex flex-col text-center space-y-4`}>
      <Image
        placeholder={'blur'}
        className="rounded-full border"
        src={imgUrl}
        alt={name}
      />
      <div className={'space-y-2'}>
        <h3 className="text-xl font-bold ">{name}</h3>
        <p className="text-sm ">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
