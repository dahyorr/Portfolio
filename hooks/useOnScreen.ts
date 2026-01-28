"use client"
import { useState, useEffect, useRef, RefObject } from 'react'

export function useOnScreen(element: RefObject<HTMLElement | null>) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting),
      { threshold: 0.6 }
    );
  }, []);

  useEffect(() => {
    if (element.current) {
      observerRef.current?.observe(element.current);
    }


    return () => {
      observerRef.current?.disconnect();
    };
  }, [element]);

  return isOnScreen;
}