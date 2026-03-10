"use client"

import { usePageReady } from "@/shared/hooks/usePageReady";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PageLoader from "../PageLoader";


export default function PageTransitionLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isLoading, setIsLoading] = useState(false);
  const isReady = usePageReady();

  useEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) return;

    const raf = requestAnimationFrame(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    });

    return () => cancelAnimationFrame(raf);
  }, [children, isLoading]);

  if (!isReady || isLoading) return <PageLoader />;

  return <>{displayChildren}</>;
}