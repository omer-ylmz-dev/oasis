import { useEffect, useState } from "react";

export function usePageReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsReady(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return isReady;
}