import { StyledHeader } from "./style";
import { Hero } from "../Hero";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="header__ul">
          <li>
            <Link className="header__link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/reading-list">
              Lista de lectura
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hero-container">
        <Hero />
      </div>
    </StyledHeader>
  );
};
