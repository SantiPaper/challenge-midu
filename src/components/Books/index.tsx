import { StyleBookSection } from "./style";
import type { Book } from "../../types/books";
import { BookDetail } from "../BookDetail";
import { BooksMap } from "../BooksMap";
import { useBooks } from "../../hooks/useBook";

type Props = {
  value: Book[];
};

export const Books = ({ value }: Props) => {
  const { showDetail, openModal, closeModal } = useBooks();

  return (
    <StyleBookSection>
      <div
        className={`container__books ${
          value.length === 0 ? "container__padding" : ""
        }`}
      >
        {value.length !== 0 ? (
          value.map((book) => <BooksMap book={book} openModal={openModal} />)
        ) : (
          <p className="not-find">No se encontraron libros</p>
        )}
        {showDetail && <BookDetail onClose={closeModal} />}
      </div>
    </StyleBookSection>
  );
};
