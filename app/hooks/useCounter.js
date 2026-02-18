'use client'
import { useState, useEffect, useRef } from "react";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false); // prevent re-trigger
  const frameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const startAnimation = () => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  return { count, countRef };
};

export default useCounter;
