import React from 'react';

const Bar = ({
  title,
  percentage,
  className,
}: {
  title: string;
  percentage: number;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="mb-1 flex items-center justify-between">
        <span className="font-bold">{title}</span>
        <span className="">{percentage}%</span>
      </div>

      <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1">
        <div
          className="bg-brand h-1 rounded-full"
          style={{ width: percentage + `%` }}
        />
      </div>
    </div>
  );
};

export default Bar;
