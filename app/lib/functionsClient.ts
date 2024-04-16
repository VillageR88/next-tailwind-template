import { CollectionGroup } from './interfaces';

export const safeContext = ({ dataContext }: { dataContext: CollectionGroup }) => {
  const safe = JSON.parse(JSON.stringify({ dataContext })) as CollectionGroup;
  safe.collections.forEach((collection) => {
    if (collection.title.length === 0) {
      collection.title = 'Untitled Collection';
    }
    collection.notes.forEach((note) => {
      if (note.title.length === 0) {
        note.title = 'Untitled Note';
      }
      if (note.description.length === 0) {
        note.description = 'Add a description here';
      }
    });
  });
  return safe;
};

export const newData = ({ data }: { data: CollectionGroup }) => {
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
