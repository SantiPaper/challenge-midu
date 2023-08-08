import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="header__ul">
          <li>
            <a className="header__link" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="header__link" href="#">
              Lista de lectura
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
