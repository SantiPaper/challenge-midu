import { Book } from "./books";

export type Context = {
  state: State;
  addBooks: (books: Book[]) => void;
};

export type State = {
  books: Book[];
  readingList: Book[];
};

export type Reducer = (state: State, action: Action) => State;

export type Action = {
  type: "ADD_BOOKS";
  payload: Book[];
};
