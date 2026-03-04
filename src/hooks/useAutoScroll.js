import { useEffect, useRef } from 'react';

/**
 * Custom hook to auto-scroll to element
 * @param {Array} dependencies - Dependencies array to trigger scroll
 * @returns {object} Ref to attach to the element
 */
export const useAutoScroll = (dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return elementRef;
};
