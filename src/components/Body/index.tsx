import React from 'react';
import Transition from '@/components/Body/Transition';

export default function Body({ children }: React.PropsWithChildren<any>) {
  return (
    <main>
      <Transition>{children}</Transition>
    </main>
  );
}
