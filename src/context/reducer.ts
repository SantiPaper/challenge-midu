import type { Reducer, State } from "../types/context";

export const initialState: State = {
  books: [],
  readingList: [],
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKS": {
      return {
        ...state,
        books: action.payload,
      };
    }
    default:
      return state;
  }
};
