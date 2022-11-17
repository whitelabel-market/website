import React, { useRef } from 'react';
import {
  SwitchTransition as ReactSwitchTransition,
  Transition as ReactTransition,
} from 'react-transition-group';
import { useRouter } from 'next/router';

export default function Transition({ children }: React.PropsWithChildren<any>) {
  const router = useRouter();
  const overlayRef = useRef(null);

  function onEnter(node: HTMLElement, isAppearing: boolean) {
    console.log(`onEnter`);
  }

  function onExit() {
    console.log(`onExit`);
  }

  return (
    <>
      <div
        ref={overlayRef}
        className={`hidden fixed top-0 left-0 w-full h-screen bg-black z-50`}
      />
      <ReactSwitchTransition>
        <ReactTransition
          appear={true}
          timeout={1}
          key={router.pathname}
          onEnter={onEnter}
          onExit={onExit}
        >
          {children}
        </ReactTransition>
      </ReactSwitchTransition>
    </>
  );
}
