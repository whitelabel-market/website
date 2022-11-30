import React from 'react';
import Tag from '@/components/Tag';
import ScrollFadeIn from '@/components/ScrollFadeIn';

export default function Experience() {
  return (
    <section className={`bg-black text-yellow`}>
      <div className={`container-default grid lg:grid-cols-4 gap-16`}>
        <ScrollFadeIn
          as={<div className="lg:col-start-2 lg:col-span-2 space-y-16" />}
        >
          <div>
            <Tag color={`yellow`}>Expertise</Tag>
          </div>
          <h2 className={`text-title`}>
            Building the digital economy of tomorrow
          </h2>
          <p className={`text-description`}>
            We invest in the most innovative ideas that address unmet market
            needs in finance and technology. We are particularly interested in
            distributed ledger technologies which enable innovation across a
            wide range of industries.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
