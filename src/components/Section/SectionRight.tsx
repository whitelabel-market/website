import React from 'react';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import Tag from '@/components/Tag';

export interface SectionRightProps {
  title?: string;
  tag?: string;
  description?: string;
  color?: 'white' | 'yellow' | 'purple' | 'black';
}

export default function SectionRight({
  title,
  tag,
  description,
  color,
  children,
}: React.PropsWithChildren<SectionRightProps>) {
  return (
    <div className={`container-default grid lg:grid-cols-4 gap-16`}>
      <ScrollFadeIn
        as={<div className="lg:col-start-2 lg:col-span-2 space-y-16" />}
      >
        {!tag ? (
          <></>
        ) : (
          <div>
            <Tag color={color}>{tag}</Tag>
          </div>
        )}

        {!title ? <></> : <h2 className={`text-title`}>{title}</h2>}

        {!description ? (
          <></>
        ) : (
          <p className={`text-description`}>{description}</p>
        )}
      </ScrollFadeIn>
      {children}
    </div>
  );
}
