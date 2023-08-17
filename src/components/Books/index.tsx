import { useBookContext } from "../../hooks/useBookContext";
import { StyleBookSection } from "./style";
import type { Book } from "../../types/books";
import { BookDetail } from "../BookDetail";
import { useState } from "react";
import { BooksMap } from "../BooksMap";

type Props = {
  value: Book[];
};

export const Books = ({ value }: Props) => {
  const { setDetail } = useBookContext();
  const [showDetail, setShowDetail] = useState(false);

  const closeModal = () => {
    setShowDetail(false);
  };

  const openModal = (book: Book) => {
    setDetail(book);
    setShowDetail(true);
  };

  return (
    <StyleBookSection>
      <h2 className="books__length">Libros disponibles {value.length}</h2>
      <div className="container__books">
        {value.map((book) => (
          <BooksMap book={book} openModal={openModal} />
        ))}
        {showDetail && <BookDetail onClose={closeModal} />}
      </div>
    </StyleBookSection>
  );
};
