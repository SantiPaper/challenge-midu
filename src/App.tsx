import { StyledContainer } from "./style";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useEffect } from "react";
import { getBooks } from "./api";
import { useBookContext } from "./hooks/useBookContext";

function App() {
  const { addBooks } = useBookContext();
  useEffect(() => {
    getBooks().then((data) => addBooks(data));
  }, []);

  return (
    <>
      <StyledContainer>
        <Header />
        <Main />
      </StyledContainer>
    </>
  );
}

export default App;
