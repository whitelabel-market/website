import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
}

export default function Card({
  title,
  icon,
  children,
}: React.PropsWithChildren<CardProps>) {
  return (
    <div className={`p-8 border-2 border-default rounded flex flex-col`}>
      <h3 className="title-2 mb-4">{title}</h3>
      <p>{children}</p>
      {icon && (
        <span className="block text-black text-3xl text-default pt-16 mt-auto">
          {icon}
        </span>
      )}
      <span className="block absolute bottom-0 right-0 w-8 h-8" />
    </div>
  );
}
