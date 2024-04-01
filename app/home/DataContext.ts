import { CollectionGroup } from '@/app/lib/interfaces';

import { createContext } from 'react';

const DataContext = createContext(
  {} as {
    dataContext: null | CollectionGroup;
    setDataContext: React.Dispatch<React.SetStateAction<null | CollectionGroup>>;
    checkSame(): boolean;
  },
);

export default DataContext;
