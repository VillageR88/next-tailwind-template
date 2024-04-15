import { CollectionGroup } from './interfaces';

const newData = ({ data }: { data: CollectionGroup }) => {
  const newData = JSON.parse(JSON.stringify(data)) as CollectionGroup;
  for (const collection of newData.collections) {
    collection.id = newData.collections.indexOf(collection) + 1;
  }
  for (const collection of newData.collections) {
    for (const note of collection.notes) {
      note.id = collection.notes.indexOf(note) + 1;
    }
  }
  return newData;
};

export default newData;
