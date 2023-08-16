import { useBookContext } from "../../hooks/useBookContext";
import { StyleBookSection } from "./style";
import type { Book } from "../../types/books";
import { BookDetail } from "../BookDetail";
import { useState } from "react";

export const Books = () => {
  const { state, addToLectureList, removeFromLectureList, setDetail } =
    useBookContext();

  const [showDetail, setShowDetail] = useState(false);

  const onClick = (book: Book) => {
    if (state.readingList.find((b) => b.ISBN === book.ISBN)) {
      removeFromLectureList(book);
    } else addToLectureList(book);
  };

  const openModal = (book: Book) => {
    setDetail(book);
    setShowDetail(true);
  };

  const closeModal = () => {
    setShowDetail(false);
  };

  return (
    <StyleBookSection>
      <h2 className="books__length">
        Libros disponibles {state.filteredBooks.length}
      </h2>
      <div className="container__books">
        {state.filteredBooks.map((book) => (
          <article className="book__container" key={book.ISBN}>
            <img className="book__image" src={book.cover} width={120} alt="" />
            <div className="book__card">
              <h2 className="book__title">{book.title}</h2>
              <div className="book__container-info">
                <p>{book.author.name}</p>
                <p>{book.year}</p>
              </div>
              <div className="book__container-buttons">
                <button
                  onClick={() => onClick(book)}
                  className="book__button-ls"
                >
                  {state.readingList.find((b) => b.ISBN === book.ISBN)
                    ? "Quitar de la lista de lectura"
                    : "Agregar a la lista de lectura"}
                </button>
                <button
                  className="book__button-wm"
                  onClick={() => openModal(book)}
                >
                  Ver más
                </button>
              </div>
            </div>
          </article>
        ))}
        {showDetail && <BookDetail onClose={closeModal} />}
      </div>
    </StyleBookSection>
  );
};
