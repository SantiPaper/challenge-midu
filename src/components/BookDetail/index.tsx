import { StyleDetail } from "./style";
import { useBookContext } from "../../hooks/useBookContext";
import { useEffect } from "react";
import type { Book } from "../../types/books";

type Props = {
  onClose: () => void;
};

export const BookDetail = ({ onClose }: Props) => {
  const { state, addToLectureList, removeFromLectureList } = useBookContext();

  const escapeListener = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  const mouseListener = (e: Event) => {
    if ((e.target as HTMLDivElement).id === "close-modal") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeListener);
    window.addEventListener("click", mouseListener);

    return () => {
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", mouseListener);
    };
  }, []);

  const onClick = (book: Book) => {
    if (state.readingList.includes(book)) {
      removeFromLectureList(book);
    } else addToLectureList(book);
  };

  return (
    <StyleDetail id="close-modal">
      <div className="modal">
        {state.detail?.map((book) => (
          <article className="card" key={book.ISBN}>
            <img
              className="card__img"
              width={300}
              src={book.cover}
              alt={book.title}
            />
            <div className="container-info">
              <h2 className="card__title">{book.title}</h2>
              <p>By {book.author.name}</p>
              <p>Genero/{book.genre}</p>
              <p className="card__synopsis">{book.synopsis}</p>
              <p> {book.pages} Paginas</p>
              <p>Lanzado en {book.year}</p>
              <button
                className="card__add-lecture"
                onClick={() => onClick(state.detail[0])}
              >
                {state.readingList.includes(state.detail[0])
                  ? "Quitar de lista de lectura"
                  : "Agregar a lista de lectura"}
              </button>
            </div>
          </article>
        ))}
        <button className="close-modal" onClick={() => onClose()}>
          X
        </button>
      </div>
    </StyleDetail>
  );
};
