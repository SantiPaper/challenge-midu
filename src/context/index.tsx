import { createContext, PropsWithChildren, useReducer } from "react";
import type { Context, Genre } from "../types/context";
import { reducer, initialState } from "./reducer";
import { Book } from "../types/books";

export const BooksContext = createContext<Context | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBooks = (books: Book[]) => {
    dispatch({
      type: "ADD_BOOKS",
      payload: books,
    });
  };

  const getByGenre = (genre: Genre) => {
    dispatch({
      type: "GET_BY_GENRE",
      payload: genre
        ? state.books.filter((book) => book.genre === genre)
        : state.books,
    });
  };

  return (
    <BooksContext.Provider
      value={{
        state,
        addBooks,
        getByGenre,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
