import React from "react";
import {Button} from "../../components";
import {videos} from "../../constants";

const Header = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center bg-black text-white pt-32">
            <div className="absolute flex top-0 left-0 w-full h-full z-20">
                <div className="absolute z-20 inset-0 h-full w-full bg-black/75"/>

                <video
                    className="w-full flex-1 z-10 object-cover"
                    muted
                    autoPlay
                    loop
                >
                    <source src={videos.headerVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={"container max-w-5xl mx-auto px-8 lg:px-16 relative z-30"}>
                <div className={"max-w-lg space-y-4 lg:space-y-8"}>
                    <h1 className="text-5xl font-bold text-white lg:text-7xl leading-tight">
                        We help grow the future industry
                    </h1>
                    <p className="!text-white">
                        Be part of the digital revolution and get the most of the value of the
                        internet.
                    </p>
                    <Button name="Our Work" href="#work" useDark={false}/>
                </div>
            </div>

        </div>
    );
};

export default Header;
