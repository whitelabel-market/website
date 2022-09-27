import React from 'react';
import Tag from '@/components/Tag';

export default function About() {
  return (
    <section
      id="about"
      className={`bg-black text-yellow flex flex-col justify-center min-h-screen`}
    >
      <div className="container-default !max-w-4xl space-y-16">
        <Tag color={`yellow`}>About</Tag>

        <h2 className={`text-title`}>Kickstart your Product With Us</h2>

        <div className={`w-full max-w-lg space-y-8`}>
          <p className={`text-description`}>
            We are a young German-speaking team of excellent programmers,
            computer scientists and Web 3.0 enthusiasts based in Germany -
            Berlin.
          </p>
        </div>
      </div>
    </section>
  );
}
