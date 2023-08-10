import { StyledMain } from "./style";
import { Hero } from "../Hero";
import { Books } from "../Books";
import { Filters } from "../Filters";

export const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Filters />
      <Books />
    </StyledMain>
  );
};
