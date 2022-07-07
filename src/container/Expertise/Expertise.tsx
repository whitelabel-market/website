import React from 'react';
import { Bar } from '../../components';

const Expertise = () => {
  const skills = [
    { title: 'Solidity', percentage: 90 },
    { title: 'Typescript/Javascript', percentage: 95 },
    { title: 'LIGO', percentage: 80 },
    { title: 'SQL', percentage: 76 },
    { title: 'Agile Methodology', percentage: 78 },
  ];
  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold">Our Expertise</h2>
        <p className="text-xl">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.
        </p>
        <ul className={'grid lg:grid-cols-2 gap-8 lg:gap-16'}>
          {skills.map((skill, index) => (
            <li key={index}>
              <Bar
                title={skill.title}
                percentage={skill.percentage}
                className={
                  index === 0 ? '' : 'lg:flex lg:flex-col lg:justify-end '
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expertise;
