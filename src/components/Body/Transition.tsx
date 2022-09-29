import React, { useEffect } from 'react';
import {
  SwitchTransition as ReactSwitchTransition,
  Transition as ReactTransition,
} from 'react-transition-group';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';

export default function Transition({ children }: React.PropsWithChildren<any>) {
  const router = useRouter();

  function onEnter(node: any) {
    gsap.fromTo(
      node,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 3,
        ease: `Power1.inOut`,
      },
    );
  }

  function onExit(node: any) {
    gsap.to(node, {
      autoAlpha: 0,
      duration: 1,
      ease: `Power1.inOut`,
    });
  }

  return (
    <ReactSwitchTransition>
      <ReactTransition
        appear={true}
        timeout={1000}
        in={true}
        key={router.pathname}
        onEnter={onEnter}
        onExit={onExit}
      >
        {children}
      </ReactTransition>
    </ReactSwitchTransition>
  );
}
