import { Book } from "./books";

export type Context = {
  state: State;
  addBooks: (books: Book[]) => void;
  getByGenre: (genre: Genre) => void;
};

export type Genre = "Ciencia ficción" | "Fantasía" | "Terror" | "Zombies" | "";

export type State = {
  books: Book[];
  readingList: Book[];
  filteredBooks: Book[];
};

export type Reducer = (state: State, action: Action) => State;

export type Action =
  | {
      type: "ADD_BOOKS";
      payload: Book[];
    }
  | {
      type: "GET_BY_GENRE";
      payload: Book[];
    };
