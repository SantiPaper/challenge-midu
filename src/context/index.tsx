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

  const getBySearch = (search: string) => {
    dispatch({
      type: "GET_BY_SEARCH",
      payload: search
        ? state.books.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          )
        : state.books,
    });
  };

  const getByPages = (pages: number) => {
    dispatch({
      type: "GET_BY_SEARCH",
      payload: state.books.filter((book) => book.pages > pages),
    });
  };

  const addToLectureList = (book: Book) => {
    dispatch({
      type: "ADD_TO_LECTURE_LIST",
      payload: book,
    });
  };

  const removeFromLectureList = (book: Book) => {
    dispatch({
      type: "REMOVE_FROM_LECTURE_LIST",
      payload: book.ISBN,
    });
  };

  const setDetail = (book: Book) => {
    dispatch({
      type: "SET_DETAIL",
      payload: book,
    });
  };

  return (
    <BooksContext.Provider
      value={{
        state,
        addBooks,
        getByGenre,
        getBySearch,
        getByPages,
        addToLectureList,
        removeFromLectureList,
        /* showDetail,
        detail,
        mostrarModal, */
        setDetail,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
