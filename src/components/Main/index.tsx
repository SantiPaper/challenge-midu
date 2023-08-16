import { StyledMain } from "./style";
import { Books } from "../Books";
import { Filters } from "../Filters";
import { LectureList } from "../LectureList";

export const Main = () => {
  return (
    <StyledMain>
      <Filters />
      <Books />
      <LectureList />
    </StyledMain>
  );
};
