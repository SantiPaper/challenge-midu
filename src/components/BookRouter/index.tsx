import { useRoutes } from "react-router-dom";
import { Books } from "../Books";
import { useBookContext } from "../../hooks/useBookContext";

export const BookRouter = () => {
  const { state } = useBookContext();

  const routes = useRoutes([
    { path: "/", element: <Books value={state.filteredBooks} /> },
    { path: "/reading-list", element: <Books value={state.readingList} /> },
  ]);

  return routes;
};
