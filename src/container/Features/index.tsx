import { videos } from '@/constants';
import React from 'react';
import Tag from '@/components/Tag';
import ScrollFadeIn from '@/components/ScrollFadeIn';

interface FeatureCardProps {
  video: string;
  title: string;
  subtitle: string;
  aspect?: 'square' | 'video';
}
function FeatureCard({
  video,
  subtitle,
  title,
  children,
}: React.PropsWithChildren<FeatureCardProps>) {
  return (
    <ScrollFadeIn as={<div className="flex flex-col space-y-8" />}>
      <div className="relative pb-8">
        <div className={`aspect-video w-full`} />
        <video
          className="block absolute inset-0 object-cover"
          muted
          autoPlay
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <Tag color={`purple`}>{subtitle}</Tag>
      </div>
      <h2 className="text-title-3">{title}</h2>
      {children}
    </ScrollFadeIn>
  );
}

export default function Features() {
  return (
    <section id={`features`} className={`bg-black text-purple`}>
      <div className={`container-default`}>
        <ul className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <li>
            <FeatureCard
              title={`Bringing the Web 3.0 era to its maximum potential`}
              subtitle={`Blockchain Ecosystems`}
              video={videos.featureVideo1}
            >
              <p className={`text-description-2 `}>
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
              subtitle={`Project Incubation`}
              video={videos.featureVideo2}
            >
              <p className={`text-description-2 `}>
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
}
