import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { PlayState, Tween } from 'react-gsap';

export default function PageTransition({
  children,
}: React.PropsWithChildren<any>) {
  const router = useRouter();
  const [playState, setPlayState] = React.useState(PlayState.pause);

  const onStart = () => {
    setPlayState(PlayState.stop);
  };
  const onEnd = () => {
    setPlayState(PlayState.restart);
  };

  useMount(() => {
    onEnd();

    router.events.on(`routeChangeStart`, onStart);
    router.events.on(`routeChangeComplete`, onEnd);
    router.events.on(`routeChangeError`, onEnd);

    return () => {
      router.events.off(`routeChangeStart`, onStart);
      router.events.off(`routeChangeComplete`, onEnd);
      router.events.off(`routeChangeError`, onEnd);
    };
  });

  return (
    <Tween
      to={{ autoAlpha: 1 }}
      duration={1}
      delay={0.4}
      playState={playState}
      ease="power3.out"
    >
      <div className={`opacity-0 invisible`}>{children}</div>
    </Tween>
  );
}
