import React from "react";
import {images} from "../../constants";
import {ArrowRightIcon} from "@heroicons/react/outline";
import {DummyLogoIcon1, DummyLogoIcon2, DummyLogoIcon3} from "../../components/Icons/DummyLogoIcons";
import {Button, StatisticNumber} from "../../components";
import Image from "next/image"

const Clients = () => {
    const statistics = [
        {number: 20, title: "Projects Completed"},
        {number: 400, title: "Happy Clients"},
        {number: 789, title: "Contest"},
    ];
    return (
        <section>
            <div className="container px-8 lg:px-16 mx-auto grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
                <div className="w-52 lg:w-full relative">
                    <Image placeholder={"blur"} src={images.mockup} alt="Our Clients"/>
                </div>
                <div className="lg:order-first lg:col-span-2 space-y-8">
                    <div className={"space-y-8"}>
                        <h2 className="title">
                            Our Beloved Clients
                        </h2>

                        <p className="text-xl">
                            We recognise our clients are the experts in their industry. We make
                            sure to make the best use of their knowledge to mutually achieve our
                            goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {statistics.map((statistic, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <span className="block mb-2">
                                    {statistic.title}
                                </span>
                                <StatisticNumber
                                    number={statistic.number}
                                    className="text-5xl lining-nums font-bold"
                                />
                            </div>
                        ))}
                    </div>
                    <div className={"flex flex-col lg:flex-row justify-between w-full p-8 bg-neutral-100 dark:bg-black rounded-2xl"}>

                        <ul className="space-y-8">
                            <li>
                                <DummyLogoIcon3 className="h-10"/>
                            </li>
                            <li>
                                <DummyLogoIcon2 className="h-10"/>
                            </li>
                            <li>
                                <DummyLogoIcon1 className="h-10"/>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="inline-flex items-center self-end mt-16 lg:mt-auto space-x-2 font-bold lg:text-xl"
                        >
                            <span className="block">See All</span>
                            <ArrowRightIcon className="h-5 w-5"/>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Clients;
