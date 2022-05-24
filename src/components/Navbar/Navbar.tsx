import React, {useState, useRef, useEffect} from "react";
import {XIcon} from "@heroicons/react/outline";
import {icons} from "../../constants";
import {DarkModeToggler} from "../../components";

const Navbar = () => {
    const topHamburgerLine = useRef(null);
    const bottomHamburgerLine = useRef(null);
    const mobileMenu = useRef(null);
    const [toggle, setToggle] = useState(false);
    const navigations = [
        {name: "About Us", link: "#about"},
        {name: "Features", link: "#features"},
        {name: "Teams", link: "#teams"},
        {name: "Portfolio", link: "#portfolio"},
    ];

    useEffect(() => {
        if (toggle) {
            topHamburgerLine.current.style.width = "100%";
            bottomHamburgerLine.current.style.width = "100%";
            mobileMenu.current.style.transform = "translateX(0px)";
        } else {
            topHamburgerLine.current.style.width = "50%";
            bottomHamburgerLine.current.style.width = "50%";
            mobileMenu.current.style.transform = "translateX(100%)";
        }
    }, [toggle]);

    return (
        <>
            <nav
                className="fixed h-32 flex items-center justify-center top-0 left-0 z-50 bg-transparent text-white w-full capitalize font-semibold text-base mix-blend-difference">
                <div className="flex items-center justify-between container px-8 lg:px-16 mx-auto relative">
                    <div className="flex items-center justify-start space-x-1">
                        <icons.LogoIcon className={"block w-8 h-8"}/>
                        <span className={"block font-bold text-xl"}>Whitelabel Solutions</span>
                    </div>
                    <ul className="hidden lg:flex items-center justify-end space-x-8">
                        {navigations.map((nav, index) => (
                            <li
                                key={nav.name + index}
                            >
                                <a className=""
                                   href={nav.link}>{nav.name}</a>
                            </li>
                        ))}
                        <li className="">
                            <DarkModeToggler/>
                        </li>
                        <li>
                            <a
                                className="inline-flex items-center justify-center rounded-full bg-transparent border border-white text-white px-12 py-2.5 text-center capitalize text-base font-semibold"
                                href="#works">Contact</a>
                        </li>
                    </ul>

                    <button
                        onClick={() => setToggle(!toggle)}
                        className="inline-flex w-[32px] flex-col space-y-[6px] p-[6px] lg:hidden"
                    >
                    <span ref={topHamburgerLine}
                          className="block ml-auto h-[2px] w-1/2 rounded-full bg-white transition-all duration-300"
                    />
                        <span className="block h-[2px] w-full rounded-full bg-white"/>
                        <span
                            ref={bottomHamburgerLine}
                            className="block mr-auto h-[2px] w-1/2 rounded-full bg-white transition-all duration-300"
                        />
                    </button>
                </div>
            </nav>
            <div
                ref={mobileMenu}
                className="fixed right-0 top-0 z-[999] flex h-screen w-9/12 flex-col items-end bg-white p-7 transition-all duration-300 dark:bg-black lg:hidden"
            >
                <button onClick={() => setToggle(false)}>
                    <XIcon className="h-4 w-4"/>
                </button>
                <ul className="mt-20 flex flex-col space-y-4 ">
                    {navigations.map((nav, index) => (
                        <li
                            className="text-right text-xl font-bold uppercase text-black dark:text-white"
                            key={nav.name + index}
                        >
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    ))}
                    <li className="w-[153px] rounded-[7px] bg-black py-3 text-center text-sm font-medium capitalize text-white dark:bg-white dark:text-black">
                        <a href="#works">Our Work</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
