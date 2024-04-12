import { useState } from 'react';
import Notebook from './Notebook';
import CollectionPage from './CollectionPage';

const Main = ({ token }: { token: string }) => {
  const [page, setPage] = useState<number | null>(null);
  return (
    <main className="flex w-full justify-center  px-8 py-12">
      {page ? <CollectionPage token={token} page={page} setPage={setPage} /> : <Notebook setPage={setPage} />}
    </main>
  );
};

export default Main;
