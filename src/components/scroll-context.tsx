'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export function ScrollProvider({ children, scrollRef }: { children: ReactNode; scrollRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContainer() {
  return useContext(ScrollContext);
}
