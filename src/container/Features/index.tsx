import { videos } from '@/constants';
import React from 'react';
import Section from '@/components/Section';
import FeatureCard from '@/container/Features/FeatureCard';

export default function Features() {
  return (
    <Section
      variant={`two-cols`}
      id={`features`}
      color={`purple`}
      bgColor={`black`}
    >
      <FeatureCard
        title={`Bringing the Web 3.0 era to its maximum potential`}
        subtitle={`Blockchain Ecosystems`}
        video={videos.featureVideo1}
      >
        <p className={`text-description-2 `}>
          Our ultimate vision is to bring Web 3.0 to its maximum potential.
          Through decentralization, we empower users while increasing
          efficiency, data security and transparency. We realize this vision as
          an active venture builder, investor and partner for promising
          blockchain projects.
        </p>
      </FeatureCard>

      <FeatureCard
        title={`Realizing the most innovative ideas in blockchain`}
        subtitle={`Project Incubation`}
        video={videos.featureVideo2}
      >
        <p className={`text-description-2 `}>
          Our team incubates projects with distributed technology and provides
          the resources to build a successful product. Our goal is to deliver
          maximum value to users while solidifying the business model. In this
          way, we produce companies that are both profitable and impactful,
          driving blockchain towards mainstream use.
        </p>
      </FeatureCard>
    </Section>
  );
}
