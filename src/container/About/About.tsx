import React from "react";
import {Button, TeamCard} from "../../components";
import {images} from "../../constants";
import {icons} from "../../constants";
import Image from 'next/image'

const About = () => {
    const teams = [
        {
            name: "Clemens Kauschke",
            role: "Senior UX Designer",
            image: images.clemens,
        },
        {name: "Manuel Grund", role: "Senior IxD", image: images.manuel},
        {
            name: "Arthur Grabowski",
            role: "Creative Director",
            image: images.arthur,
        },
        {name: "Marco Weh", role: "Motion Designer", image: images.marco},
        {name: "Harvey Specter", role: "Lawyer", image: images.harvey},
        {name: "Paul Richter", role: "Senior UX Researcher", image: images.paul},
    ];
    return (
        <section id="about">
            <div className="container mx-auto px-8 lg:px-16 grid gap-8 lg:gap-16 lg:grid-cols-5 lg:items-center">
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-8">
                        <h2 className="title">
                            Kick Start Your Product With Us
                        </h2>
                        <div className={"space-y-4"}>
                            <h3 className="title-2">
                                Who We Are
                            </h3>
                            <p>
                                We are a young German-speaking team of excellent programmers,
                                computer scientists and Web3.0 enthusiasts. We work in the most
                                beautiful city in Germany - Berlin. Therefore, German quality
                                standards are also important to us.
                            </p>
                        </div>
                        <div className={"space-y-4"}>
                            <h3 className="title-2">
                                Our Mission
                            </h3>
                            <p>
                                We believe that the future of the internet and Web3 will be driven
                                by transparent and open communities and it is our mission to speed
                                up this shift for our clients.
                            </p>
                        </div>

                    </div>

                    <Button name="Get Started" href="#" isSecondary={true}/>
                </div>

                <div
                    className="mx-auto flex w-full snap-x snap-mandatory space-x-4 overflow-x-scroll lg:col-span-3 lg:order-first lg:grid lg:snap-none lg:grid-cols-3 lg:gap-8 lg:space-x-0 lg:overflow-x-visible ">
                    {teams.map((team, index) => (
                        <TeamCard
                            key={team.name + index}
                            name={team.name}
                            role={team.role}
                            imgUrl={team.image}
                            className=" w-full flex-shrink-0 snap-start snap-normal pb-6 lg:shrink lg:pb-0"
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 lg:hidden">
                    <Image src={icons.swipeIcon} alt={"swipe"}/>
                    <span className="text-xs uppercase">Swipe</span>
                </div>
            </div>
        </section>
    );
};

export default About;
