import { videos } from '@/constants';
import React from 'react';
import Tag from '@/components/Tag';

interface FeatureCardProps {
  video: string;
  title: string;
  subtitle: string;
  aspect?: 'square' | 'video';
}
function FeatureCard({
  aspect = `video`,
  video,
  subtitle,
  title,
  children,
}: React.PropsWithChildren<FeatureCardProps>) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className={`aspect-video w-full`} />
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

      <div className={`w-full max-w-xl mx-auto py-8 space-y-8`}>
        <div className={`space-y-8`}>
          <Tag color={`purple`}>{subtitle}</Tag>
          <h2 className="text-3xl">{title}</h2>
        </div>

        {children}
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <section id={`features`} className={`bg-black text-purple`}>
      <div className={`container max-w-6xl px-4 lg:px-8 mx-auto`}>
        <ul className="grid lg:grid-cols-2 gap-16">
          <li>
            <FeatureCard
              title={`Bringing the Web 3.0 era to its maximum potential`}
              subtitle={`Strategic support for blockchain ecosystems`}
              video={videos.featureVideo1}
            >
              <p>
                Our ultimate vision is to bring Web 3.0 to its maximum
                potential. Through decentralization, we empower users while
                increasing efficiency, data security and transparency. We
                realize this vision as an active venture builder, investor and
                partner for promising blockchain projects.
              </p>
            </FeatureCard>
          </li>
          <li>
            <FeatureCard
              title={`Realizing the most innovative ideas in blockchain`}
              subtitle={`Incubation of our projects`}
              video={videos.featureVideo2}
            >
              <p>
                Our team incubates projects with distributed technology and
                provides the resources to build a successful product. Our goal
                is to deliver maximum value to users while solidifying the
                business model. In this way, we produce companies that are both
                profitable and impactful, driving blockchain towards mainstream
                use.
              </p>
            </FeatureCard>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
