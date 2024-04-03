'use server';

interface Note {
  id: number;
  title: string;
  description: string;
}

interface Collection {
  id: number;
  title: string;
  Notes: Note[];
}

interface CollectionGroup {
  collections: Collection[];
}

export type { CollectionGroup, Collection, Note };
