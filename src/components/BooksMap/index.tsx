import { Book } from "../../types/books";
import { useBookContext } from "../../hooks/useBookContext";

type Props = {
  book: Book;
  openModal: (book: Book) => void;
};

export const BooksMap = ({ book, openModal }: Props) => {
  const { addToLectureList, removeFromLectureList, state } = useBookContext();

  const onClick = (book: Book) => {
    if (state.readingList.find((b) => b.ISBN === book.ISBN)) {
      removeFromLectureList(book);
    } else addToLectureList(book);
  };

  return (
    <article className="book__container" key={book.ISBN}>
      <img className="book__image" src={book.cover} width={120} alt="" />
      <div className="book__card">
        <h2 className="book__title">{book.title}</h2>
        <div className="book__container-info">
          <p>{book.author.name}</p>
          <p>{book.year}</p>
        </div>
        <div className="book__container-buttons">
          <button onClick={() => onClick(book)} className="book__button-ls">
            {state.readingList.find((b) => b.ISBN === book.ISBN)
              ? "Quitar de la lista de lectura"
              : "Agregar a la lista de lectura"}
          </button>
          <button className="book__button-wm" onClick={() => openModal(book)}>
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
};
