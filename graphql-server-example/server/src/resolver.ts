import { books, authors } from "./data-set.js";
import { GraphQLResolveInfo } from "graphql";

import { Book, Context, Author } from "./types.js";

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Book: {
    author: (
      parent: Book,
      args: {},
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (
      parent: Author,
      args: {},
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      return books.filter((book) => book.authorId === parent.id);
    },
  },
  Mutation: {
    addBook: (
      parent: any,
      args: Book,
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const id = (books.length = 1);
      const publishedYear = args.publishedYear || new Date().getFullYear();

      const book: Book = {
        id,
        title: args.title,
        authorId: args.authorId,
        publishedYear: publishedYear,
      };

      books.push(book);
      return book;
    },
  },
};

export { resolvers };
