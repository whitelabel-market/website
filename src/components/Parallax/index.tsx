import React, { RefObject, useRef } from 'react';
import { motion } from 'framer-motion';
import useParallax, {
  InputRangeOrTransformer,
  OutputRange,
} from '@/hooks/parallax';

interface ParallaxProps {
  passRef?: RefObject<any>;
  className?: string;
  inputRangeOrTransformer?: InputRangeOrTransformer;
  outputRange?: OutputRange;
}
export default function Parallax({
  passRef,
  children,
  className,
  inputRangeOrTransformer,
  outputRange,
}: React.PropsWithChildren<ParallaxProps>) {
  const motionRef = useRef(null);
  const y = useParallax(
    passRef || motionRef,
    inputRangeOrTransformer,
    outputRange,
  );

  return (
    <motion.div style={{ y }} className={className} ref={motionRef}>
      {children}
    </motion.div>
  );
}
