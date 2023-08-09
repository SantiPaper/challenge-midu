import { createContext, PropsWithChildren, useReducer } from "react";
import type { Context } from "../types/context";
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

  return (
    <BooksContext.Provider
      value={{
        state,
        addBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
