import { StyledContainer } from "./style";

function App() {
  return (
    <>
      <StyledContainer>
        <header className="header">
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
        </header>
      </StyledContainer>
    </>
  );
}

export default App;
