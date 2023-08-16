import { useBookContext } from "../../hooks/useBookContext";

export const LectureList = () => {
  const { state, removeFromLectureList } = useBookContext();
  return (
    <section>
      {state.readingList.map((book) => (
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
                onClick={() => removeFromLectureList(book)}
                className="book__button-ls"
              >
                Quitar de la lista de lectura
              </button>
              <button className="book__button-wm">Ver más</button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
