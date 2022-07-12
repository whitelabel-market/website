import { videos } from '../../constants';
import React from 'react';
import { ButtonOutline, ButtonSecondary } from '../../components';

interface FeatureCardProps {
  index: string;
  video: string;
  title: string;
  subtitle: string;
  rtl?: boolean;
}
function FeatureCard({
  index,
  video,
  subtitle,
  title,
  rtl = false,
  children,
}: React.PropsWithChildren<FeatureCardProps>) {
  return (
    <div className="grid items-center lg:grid-cols-2 items-center">
      <div className="relative">
        <div className={`aspect-video lg:aspect-square w-full`} />
        <video
          className="block absolute top-0 left-0 h-full w-full object-cover"
          muted
          autoPlay
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={
          `w-full max-w-xl mx-auto p-8 space-y-8` +
          ` ` +
          (rtl ? `lg:order-last` : `lg:order-first`)
        }
      >
        <div className={`space-y-4`}>
          <span className="block font-serif text-7xl slashed-zero">
            {index}
          </span>
          <h3 className="subtitle">{subtitle}</h3>
          <h2 className="title-2 font-serif">{title}</h2>
        </div>

        {children}
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <>
      <section className={`lg:!pb-0`} id={`features`}>
        <FeatureCard
          index={`01`}
          title={`Bringing the Web 3.0 era to its maximum potential`}
          subtitle={`Strategic support for blockchain ecosystems`}
          video={videos.featureVideo1}
        >
          <p>
            Our ultimate vision is to bring Web 3.0 to its maximum potential.
            Through decentralization, we empower users while increasing
            efficiency, data security and transparency. We realize this vision
            as an active venture builder, investor and partner for promising
            blockchain projects.
          </p>
          <ButtonSecondary>Learn More</ButtonSecondary>
        </FeatureCard>
      </section>
      <section className={`lg:!pt-0`}>
        <FeatureCard
          index={`02`}
          title={`Realizing the most innovative ideas in blockchain`}
          subtitle={`Incubation of our projects`}
          video={videos.featureVideo2}
          rtl={true}
        >
          <p>
            Our team incubates projects with distributed technology and provides
            the resources to build a successful product. Our goal is to deliver
            maximum value to users while solidifying the business model. In this
            way, we produce companies that are both profitable and impactful,
            driving blockchain towards mainstream use.
          </p>
          <ButtonSecondary>Learn More</ButtonSecondary>
        </FeatureCard>
      </section>
    </>
  );
};

export default Features;
