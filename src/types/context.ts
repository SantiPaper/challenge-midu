import { Book } from "./books";

export type Context = {
  state: State;
  addBooks: (books: Book[]) => void;
  getByGenre: (genre: Genre) => void;
  getBySearch: (search: string) => void;
  getByPages: (pages: number) => void;
  addToLectureList: (book: Book) => void;
  removeFromLectureList: (book: Book) => void;
  /* mostrarModal: (book: Book) => void; */
  setDetail: (book: Book) => void;
};

export type Genre = "Ciencia ficción" | "Fantasía" | "Terror" | "Zombies" | "";

export type State = {
  books: Book[];
  readingList: Book[];
  filteredBooks: Book[];
  detail: Book[];
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
    }
  | {
      type: "GET_BY_SEARCH";
      payload: Book[];
    }
  | {
      type: "GET_BY_PAGES";
      payload: Book[];
    }
  | {
      type: "ADD_TO_LECTURE_LIST";
      payload: Book;
    }
  | {
      type: "REMOVE_FROM_LECTURE_LIST";
      payload: string;
    }
  | {
      type: "SET_DETAIL";
      payload: Book;
    };
