import { Genre } from "../../types/context";
import { StyledSection } from "./style";
import { useFilters } from "../../hooks/useFilters";

const genres: Genre[] = [
  "",
  "Ciencia ficción",
  "Fantasía",
  "Terror",
  "Zombies",
];

export const Filters = () => {
  const { getMaxPages, inputRef, onPageChange, onSearch, onSelect, pagesRef } =
    useFilters();

  return (
    <StyledSection>
      <form id="form" className="form">
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
            placeholder="Harry potter y la..."
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
            className="form__select"
            onChange={onPageChange}
            id="pages"
            type="range"
            min="0"
            max={getMaxPages()}
            ref={pagesRef}
          />
          <p>
            {pagesRef.current?.value} paginas - {getMaxPages()} paginas
          </p>
        </div>
      </form>
    </StyledSection>
  );
};
