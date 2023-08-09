import { useBookContext } from "../../hooks/useBookContext";
import { StyleBookSection } from "./style";

export const Books = () => {
  const { state } = useBookContext();

  return (
    <StyleBookSection>
      {state.books.map((book) => (
        <article className="book__container" key={book.ISBN}>
          <img className="book__image" src={book.cover} width={120} alt="" />
          <div className="book__card">
            <h2 className="book__title">
              {book.title.length < 25
                ? book.title
                : book.title.slice(0, 25).concat("(...)")}
            </h2>
            <div className="book__container-info">
              <p>{book.author.name}</p>
              <p>{book.year}</p>
            </div>
            <div className="book__container-buttons">
              <button>Agregar a lista de lectura</button>
              <button>Ver mas</button>
            </div>
          </div>
        </article>
      ))}
    </StyleBookSection>
  );
};
