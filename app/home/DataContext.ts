import { CollectionGroup } from '@/app/lib/interfaces';
import { MutableRefObject, createContext } from 'react';

const DataContext = createContext(
  {} as {
    dataContext: null | CollectionGroup;
    setDataContext: React.Dispatch<React.SetStateAction<null | CollectionGroup>>;
    initialDataContext: MutableRefObject<CollectionGroup | null>;
  },
);

export default DataContext;
