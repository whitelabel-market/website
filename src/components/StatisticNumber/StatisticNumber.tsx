import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const StatisticNumber = ({ number, className }) => {
  const ref = useRef();
  const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { rootMargin }
      );

      element.current && observer.observe(element.current);

      return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
  };

  const inViewport = useIntersection(ref, "0px");

  //   if (inViewport) {
  //     console.log("in viewport:", ref.current);
  //     ref.current.style.opacity = 1;
  //   }

  return (
    <h3 ref={ref} className={`${className} transition-all duration-1000`}>
      {inViewport && <CountUp end={number} duration={5} />}
    </h3>
  );
};

export default StatisticNumber;
