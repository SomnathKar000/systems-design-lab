export type Book = {
  id: number;
  title: string;
  publishedYear?: number;
  authorId: number;
};

export type Author = {
  id: number;
  name: string;
};

export type Context = {};
