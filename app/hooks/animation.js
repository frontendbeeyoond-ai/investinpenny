'use client'
import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // SSR guard
    if (typeof window === "undefined") return;

    // Safari fallback
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    if (!ref.current) return;

    let observer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      observer.observe(ref.current);
    } catch (err) {
      // Fallback for iOS crash
      setIsVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollAnimation;
