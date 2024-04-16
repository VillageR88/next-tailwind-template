'use server';

interface Note {
  id: number;
  title: string;
  description: string;
}

interface Collection {
  id: number;
  title: string;
  notes: Note[];
}

type SubmitButtonType = 'login' | 'createAccount';

interface CollectionGroup {
  collections: Collection[];
}

export type { CollectionGroup, Collection, Note, SubmitButtonType };
