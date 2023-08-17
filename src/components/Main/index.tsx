import { StyledMain } from "./style";
import { BookRouter } from "../BookRouter";
import { Filters } from "../Filters";

export const Main = () => {
  return (
    <StyledMain>
      <Filters />
      <BookRouter />
    </StyledMain>
  );
};
