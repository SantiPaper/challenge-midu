import { useState } from "react";
import { useBookContext } from "./useBookContext";
import type { Book } from "../types/books";

export const useBooks = () => {
  const { setDetail, removeFromLectureList, addToLectureList, state } =
    useBookContext();
  const [showDetail, setShowDetail] = useState(false);

  const closeModal = () => {
    setShowDetail(false);
  };

  const openModal = (book: Book) => {
    setDetail(book);
    setShowDetail(true);
  };

  const onClick = (book: Book) => {
    if (state.readingList.find((b) => b.ISBN === book.ISBN)) {
      removeFromLectureList(book);
    } else addToLectureList(book);
  };

  return { showDetail, openModal, closeModal, onClick };
};
