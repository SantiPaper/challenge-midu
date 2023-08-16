import { useBookContext } from "../../hooks/useBookContext";
import { ChangeEvent, useRef } from "react";
import { Genre } from "../../types/context";
import { StyledSection } from "./style";

const genres: Genre[] = [
  "",
  "Ciencia ficción",
  "Fantasía",
  "Terror",
  "Zombies",
];

export const Filters = () => {
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

  return (
    <StyledSection>
      <form className="form">
        <div className="form__div__input">
          <label className="form__label" htmlFor="Búsqueda">
            Búsqueda
          </label>
          <input
            onChange={onSearch}
            aria-label="Buscar libro por nombre"
            type="text"
            id="Búsqueda"
            ref={inputRef}
            placeholder="Búsqueda"
            className="form__input__search"
          />
        </div>
        <div className="form__div__input">
          <label className="form__label" htmlFor="Genero">
            Genero
          </label>

          <select
            className="form__select"
            onChange={onSelect}
            name=""
            id="Gereno"
          >
            {genres.map((genre) => (
              <option
                className="form__select__option"
                key={genre}
                value={genre}
              >
                {genre || "Todos los libros"}
              </option>
            ))}
          </select>
        </div>
        <div className="form__div__input">
          <label className="form__label" htmlFor="pages">
            Filtrar por paginas
          </label>
          <input
            onChange={onPageChange}
            id="pages"
            type="range"
            min="0"
            max={getMaxPages()}
            ref={pagesRef}
          />
          <p>
            {pagesRef.current?.value} - {getMaxPages()}
          </p>
        </div>
      </form>
    </StyledSection>
  );
};
