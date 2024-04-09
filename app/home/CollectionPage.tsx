import DataContext from './DataContext';
import { useContext } from 'react';
import IconReturn from '../components/IconReturn';
import ButtonRename from '../components/ButtonRename';
import ButtonDelete from '../components/ButtonDelete';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';
import newData from '../lib/newData';
import { CollectionGroup } from '../lib/interfaces';

const CollectionPage = ({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const context = useContext(DataContext);
  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <div className="group flex select-none flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4 ">
        <div className="flex justify-between px-1">
          <div className="flex items-center gap-3 pb-[8px]">
            <span className="text-left text-[18px] font-bold text-white">
              {context.dataContext.collections[page - 1].title}
            </span>
            <ButtonRename />
          </div>
          <ButtonDelete
            alwaysVisible
            func={() => {
              const newCollections = context.dataContext.collections.filter((collection) => collection.id !== page);
              const newDataContext = { collections: newCollections };
              console.log(newDataContext);
              console.log(context.dataContext);
              const stringifiedData = JSON.parse(JSON.stringify(newDataContext)) as CollectionGroup;
              context.initialDataContext.current = stringifiedData;
              context.setDataContext(stringifiedData);
              const token = localStorage.getItem('token');
              if (!token) return;
              void handleSaveCollectionGroup({
                data: newData({ data: newDataContext }),
                token: token,
              });
              setPage(null);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          {context.dataContext.collections[page - 1].Notes.map((note) => (
            <div className="rounded-[6px] bg-[#1C1C1C] p-[10px] text-white" key={note.id}>
              <div className="flex justify-between pl-1 pr-2">
                <span>{note.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="button1 flex pt-[3px]"
        onClick={() => {
          setPage(null);
        }}
      >
        <IconReturn />
        <span className="hidden pl-1 md:block">Return</span>
      </button>
    </div>
  );
};

export default CollectionPage;
