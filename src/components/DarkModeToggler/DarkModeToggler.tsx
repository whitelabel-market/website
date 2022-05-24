import React, {useRef, useState, useEffect} from "react";
import {useTheme} from 'next-themes'
import {SunIcon, MoonIcon} from '@heroicons/react/solid'


const DarkModeToggler = () => {
    const {theme, setTheme} = useTheme()

    const circleButton = useRef(null);
    const title = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative inline-flex items-center justify-center rounded-full p-1"
        >
            {theme === 'dark'
                ? <SunIcon className={"w-6 h-6"}/>
                : <MoonIcon className={"w-6 h-6"}/>
            }
        </button>
    );
};

export default DarkModeToggler;
