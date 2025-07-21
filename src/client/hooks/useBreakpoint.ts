"use client";

import { useEffect, useState } from "react";

const DEFAULT_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

type DefaultBreakpointKey = keyof typeof DEFAULT_BREAKPOINTS;

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<DefaultBreakpointKey>("xs");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = Object.entries(DEFAULT_BREAKPOINTS)
        .sort(([, a], [, b]) => b - a)
        .find(([, minWidth]) => width >= minWidth)?.[0] as DefaultBreakpointKey;

      setCurrentBreakpoint(breakpoint || "xs");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return currentBreakpoint;
};

export default useBreakpoint;
export { DEFAULT_BREAKPOINTS };
export type { DefaultBreakpointKey };
