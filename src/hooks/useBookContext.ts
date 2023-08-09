import { useContext } from "react";
import { BooksContext } from "../context";

export const useBookContext = () => {
  const value = useContext(BooksContext);
  if (!value) {
    throw new Error("useBookContext tiene que usarse dentro del provider");
  }
  return value;
};
