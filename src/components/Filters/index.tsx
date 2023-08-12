import { useBookContext } from "../../hooks/useBookContext";
import { ChangeEvent } from "react";
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
  const { getByGenre } = useBookContext();

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    getByGenre(ev.target.value as Genre);
  };

  return (
    <StyledSection>
      <form className="form">
        <div>
          <label htmlFor="Búsqueda">Buscar libro</label>
          <input
            aria-label="Buscar libro por nombre"
            type="text"
            id="Búsqueda"
          />
        </div>
        <div>
          <label htmlFor="Genero">Filtrar por genero</label>
          <select onChange={onSelect} name="" id="Gereno">
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre || "Todos"}
              </option>
            ))}
          </select>
        </div>
      </form>
    </StyledSection>
  );
};
