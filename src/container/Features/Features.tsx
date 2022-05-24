import {Button} from "../../components";
import {videos} from "../../constants";

const Features = () => {
    return (
        <>
            <section className={"lg:!pb-0"}>
                <div className="grid items-center lg:grid-cols-2 items-center">
                    <div className="relative">
                        <div className={"aspect-square w-full"}/>
                        <video className="block absolute top-0 left-0 h-full w-full object-cover" muted autoPlay loop>
                            <source src={videos.featureVideo1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="w-full max-w-xl mx-auto p-8 space-y-8 lg:order-first">
                        <div className={"space-y-4"}>
                            <span className="block text-6xl font-bold text-neutral-200 lg:text-7xl">01</span>
                            <h3 className="subtitle">
                                Strategic support for blockchain ecosystems.
                            </h3>
                            <h2 className="title-2">
                                Bringing the Web 3.0 era to its maximum potential
                            </h2>
                        </div>

                        <p className="">
                            Our ultimate vision is to bring Web 3.0 to its maximum potential.
                            Through decentralization, we empower users while increasing
                            efficiency, data security and transparency. We realize this vision
                            as an active venture builder, investor and partner for promising
                            blockchain projects.
                        </p>
                        <Button name="Learn More" isSecondary={true}/>
                    </div>
                </div>
            </section>
            <section className={"lg:!pt-0"}>
                <div className="grid items-center lg:grid-cols-2 items-center">
                    <div className="relative">
                        <div className={"aspect-square w-full"}/>
                        <video className="block absolute top-0 left-0 h-full w-full object-cover" muted autoPlay loop>
                            <source src={videos.featureVideo2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="w-full max-w-xl mx-auto p-8 space-y-8">
                        <div className={"space-y-4"}>
                            <span className="block text-6xl font-bold text-neutral-200 lg:text-7xl">02</span>
                            <h3 className="subtitle">
                                Incubation of our projects
                            </h3>
                            <h2 className="title-2">
                                Realizing the most innovative ideas in blockchain
                            </h2>
                        </div>

                        <p>
                            Our team incubates projects with distributed technology and provides
                            the resources to build a successful product. Our goal is to deliver
                            maximum value to users while solidifying the business model. In this
                            way, we produce companies that are both profitable and impactful,
                            driving blockchain towards mainstream use.
                        </p>

                        <Button name="Learn More" isSecondary={true}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
