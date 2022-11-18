import React from 'react';
import Tag from '@/components/Tag';
import { motion } from 'framer-motion';
import Parallax from '@/components/Parallax';

export default function About() {
  const spring = {
    mass: 0.8,
    stiffness: 300,
    damping: 70,
  };

  return (
    <section
      id="about"
      className={`bg-black text-yellow flex flex-col justify-center min-h-screen`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={spring}
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
      </motion.div>
    </section>
  );
}
