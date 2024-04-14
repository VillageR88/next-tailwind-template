import { Dispatch, SetStateAction } from 'react';
import IconReturn from '../components/IconReturn';

export default function NotePage({
  token,
  collectionPage,
  notePage,
  setNotePage,
}: {
  token: string;
  collectionPage: number | null;
  notePage: number | null;
  setNotePage: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <div className="group flex select-none flex-col gap-[6px] rounded-[6px] border border-[#f5f5f5] bg-white px-3 py-4 drop-shadow-sm dark:border-[#313131] dark:bg-[#232323]">
        NOTE PAGE
      </div>
      <button
        className="button1 flex pt-[3px]"
        onClick={() => {
          /*
         
          setCollectionPage(null);
          if (!token) return;
          const safeContext = () => {
            const safe = JSON.parse(JSON.stringify(dataContext)) as CollectionGroup;
            safe.collections.forEach((collection) => {
              if (collection.title.length === 0) {
                collection.title = 'Untitled Collection';
              }
            });
            return safe;
          };
          initialDataContext.current = newData({ data: safeContext() });
          setDataContext(newData({ data: safeContext() }));
          void handleSaveCollectionGroup({
            data: newData({ data: safeContext() }),
            token: token,
          });
        */
          setNotePage(null);
        }}
      >
        <IconReturn />
        <span className="hidden pl-1 md:block">Return</span>
      </button>
    </div>
  );
}
