import books from "./books.json";
import type { Book } from "../types/books";

export const getBooks = (): Promise<Book[]> => {
  return Promise.resolve(books.library.map((book) => book.book));
};
