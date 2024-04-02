import { useState } from 'react';
import Notebook from './Notebook';
import CollectionPage from './CollectionPage';

const Main = () => {
  const [page, setPage] = useState<number | null>(null);
  return (
    <main className="flex w-full justify-center bg-[#1C1C1C] px-8 py-12">
      {page ? <CollectionPage page={page} setPage={setPage} /> : <Notebook setPage={setPage} />}
    </main>
  );
};

export default Main;
