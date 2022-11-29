import { useMedia } from 'react-use';
import { useEffect } from 'react';

export function useDevice() {
  const isMobile = useMedia(`(max-width: 639.99px)`, true);
  const isTablet = useMedia(`(max-width: 767.99px)`, true);

  const isTouch = useMedia(`(max-width: 1023.99px)`, true);
  const isCursor = !isTouch;

  function useEffectIfTouchOrCursor(fn: () => void, enable: boolean) {
    useEffect(() => {
      if (enable) {
        fn();
      }
    }, [isTouch]);
  }

  function useEffectIfTouch(fn: () => void) {
    useEffectIfTouchOrCursor(fn, isTouch);
  }

  function useEffectIfCursor(fn: () => void) {
    useEffectIfTouchOrCursor(fn, isCursor);
  }

  return {
    isMobile,
    isTablet,
    isTouch,
    isCursor,
    useEffectIfTouch,
    useEffectIfCursor,
  };
}
