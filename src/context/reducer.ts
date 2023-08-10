import type { Reducer, State } from "../types/context";

export const initialState: State = {
  books: [],
  readingList: [],
  filteredBooks: [],
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKS": {
      return {
        ...state,
        books: action.payload,
        filteredBooks: action.payload,
      };
    }
    case "GET_BY_GENRE": {
      return {
        ...state,
        filteredBooks: action.payload,
      };
    }
    default:
      return state;
  }
};
