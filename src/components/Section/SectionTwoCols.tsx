import React from 'react';

export default function SectionTwoCols({
  children,
}: React.PropsWithChildren<any>) {
  return (
    <div className={`container-default grid lg:grid-cols-2 gap-16 lg:gap-32`}>
      {children}
    </div>
  );
}
