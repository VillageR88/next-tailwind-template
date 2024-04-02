import { CollectionGroup } from '@/app/lib/interfaces';
import { Dispatch, MutableRefObject, createContext } from 'react';

const DataContext = createContext(
  {} as {
    dataContext: CollectionGroup;
    setDataContext: Dispatch<React.SetStateAction<CollectionGroup>>;
    initialDataContext: MutableRefObject<CollectionGroup>;
  },
);

export default DataContext;
