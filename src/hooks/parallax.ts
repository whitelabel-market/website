import { useScroll, useSpring, useTransform } from 'framer-motion';
import { RefObject, useEffect } from 'react';
import { useDcmScrollContainer } from '@/hooks/scroll';

export type InputRangeOrTransformer = (input: number) => number | number[];
export type OutputRange = number[];

export default function useParallax(
  target: RefObject<any>,
  inputRangeOrTransformer?: InputRangeOrTransformer,
  outputRange?: OutputRange,
) {
  const [container] = useDcmScrollContainer();

  useEffect(() => {
    console.log(`container changed`, container);
  }, [container]);

  const { scrollY } = useScroll({
    target,
    container,
  });

  const value =
    typeof inputRangeOrTransformer === `function`
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(scrollY, inputRangeOrTransformer)
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(
          scrollY,
          inputRangeOrTransformer || [1, 0],
          outputRange || [0, 100],
        );

  return value;
}
