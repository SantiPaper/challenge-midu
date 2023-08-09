import { StyledMain } from "./style";
import { Hero } from "../Hero";
import { Books } from "../Books";

export const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Books />
    </StyledMain>
  );
};
