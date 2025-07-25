"use client";

import { useState, useEffect } from "react";

interface UseIntersectionObserverProps {
  ref: React.RefObject<HTMLElement | null>;
  defaultValue?: boolean;
}

const useIntersectionObserver = ({
  ref,
  defaultValue = false,
}: UseIntersectionObserverProps) => {
  const [isIntersecting, setIntersecting] = useState(defaultValue);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
