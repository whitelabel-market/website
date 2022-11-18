import { createGlobalState } from 'react-use';
import { RefObject } from 'react';

export const useDcmScrollContainer =
  createGlobalState<RefObject<HTMLElement>>();
