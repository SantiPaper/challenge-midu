import { StyledHeader } from "./style";
import { Hero } from "../Hero";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="header__ul">
          <li>
            <a className="header__link" href="/">
              Inicio
            </a>
          </li>
          <li>
            <a className="header__link" href="/reading-list">
              Lista de lectura
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-container">
        <Hero />
      </div>
    </StyledHeader>
  );
};
