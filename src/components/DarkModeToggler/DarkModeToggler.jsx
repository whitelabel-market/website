import React, { useRef, useState, useEffect } from "react";
// import "./DarkModeTogller.css";

const DarkModeToggler = () => {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      setIsDark(true);
    } else setIsDark(false);
  };

  const circleButton = useRef(null);
  const title = useRef(null);
  const [isDark, setIsDark] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    themeCheck();
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      circleButton.current.style.transform = "translateX(100%)";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      circleButton.current.style.transform = "translateX(0px)";
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-5 right-5 z-[1000] flex flex-col  items-center ">
      <p
        ref={title}
        className={`title text-sm uppercase transition-all duration-500 dark:text-white ${
          offset < 61 ? "text-white" : "text-black"
        }`}
      >
        Dark Mode
      </p>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative flex w-[50px] items-center justify-between rounded-full bg-[#141414] py-[5px] px-2"
      >
        <div
          ref={circleButton}
          className="absolute left-1 bottom-[1.55px] h-5 w-5 rounded-full bg-white transition-all duration-300"
        ></div>
        <p className="text-[10px] font-bold text-[#141414] dark:text-white">
          On
        </p>
        <p className="text-[10px] font-bold text-white dark:text-[#141414]">
          Off
        </p>
      </button>
    </div>
  );
};

export default DarkModeToggler;
