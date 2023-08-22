import { ChangeEvent, useRef } from "react";
import { useBookContext } from "./useBookContext";
import { Genre } from "../types/context";

export const useFilters = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const pagesRef = useRef<HTMLInputElement>(null);
  const { getByGenre, getBySearch, getByPages, state } = useBookContext();

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    getByGenre(ev.target.value as Genre);
    inputRef.current!.value = "";
  };

  const onSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    getBySearch(ev.target.value);
  };

  const onPageChange = (ev: ChangeEvent<HTMLInputElement>) => {
    getByPages(Number(ev.target.value));
  };

  const getMaxPages = () => {
    const books = state.books;
    let maxPages = 0;
    for (let i = 0; i < books.length; i++) {
      if (maxPages < books[i].pages) {
        maxPages = books[i].pages;
      }
    }
    return maxPages;
  };

  return {
    inputRef,
    pagesRef,
    onSelect,
    onSearch,
    onPageChange,
    getMaxPages,
  };
};
