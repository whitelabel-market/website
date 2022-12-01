import { videos } from '@/constants';
import React from 'react';
import Tag from '@/components/Tag';
import Section from '@/components/Section';
import ScrollFadeIn from '@/components/ScrollFadeIn';

interface FeatureCardProps {
  video: string;
  title: string;
  subtitle: string;
  aspect?: 'square' | 'video';
}

export default function FeatureCard({
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
          className="block absolute inset-0 object-cover rounded overflow-hidden"
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
