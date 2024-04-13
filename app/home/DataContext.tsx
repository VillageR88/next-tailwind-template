'use client';
import { CollectionGroup } from '@/app/lib/interfaces';
import { createContext, useRef, useState } from 'react';

export const DataContext = createContext(
  {} as {
    dataContext: CollectionGroup;
    setDataContext: React.Dispatch<React.SetStateAction<CollectionGroup>>;
    initialDataContext: React.MutableRefObject<CollectionGroup>;
  },
);
export default function Provider({ children }: { children: React.ReactNode }) {
  const [dataContext, setDataContext] = useState<CollectionGroup>({ collections: [] });
  const initialDataContext = useRef<CollectionGroup>({ collections: [] });
  return (
    <DataContext.Provider value={{ dataContext, setDataContext, initialDataContext }}>{children}</DataContext.Provider>
  );
}
