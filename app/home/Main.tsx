import { useState } from 'react';
import Notebook from './Notebook';
import CollectionPage from './CollectionPage';
import NotePage from './NotePage';

const Main = ({ token, loading }: { token: string; loading: boolean }) => {
  console.log(token);

  const [collectionPage, setCollectionPage] = useState<number | null>(null);
  const [notePage, setNotePage] = useState<number | null>(null);

  return (
    <main className="flex w-full justify-center  px-8 py-12">
      {notePage ? (
        <NotePage token={token} collectionPage={collectionPage} notePage={notePage} setNotePage={setNotePage} />
      ) : collectionPage ? (
        <CollectionPage
          token={token}
          collectionPage={collectionPage}
          setCollectionPage={setCollectionPage}
          setNotePage={setNotePage}
        />
      ) : (
        <Notebook token={token} loading={loading} setCollectionPage={setCollectionPage} />
      )}
    </main>
  );
};

export default Main;
