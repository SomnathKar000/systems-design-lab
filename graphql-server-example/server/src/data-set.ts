import { Author, Book } from "./types.js";

const authors: Author[] = [
  { id: 1, name: "Kate Chopin" },
  { id: 2, name: "Paul Auster" },
];

const books: Book[] = [
  { id: 1, title: "The Awakening", authorId: 1, publishedYear: 2019 },
  { id: 2, title: "City of Glass", authorId: 2, publishedYear: 2020 },
  { id: 3, title: "Name of Author", authorId: 1, publishedYear: 2024 },
];

export { books, authors };
