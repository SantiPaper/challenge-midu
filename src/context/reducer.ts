import type { Reducer, State } from "../types/context";

const localStorageKey = "lecture-list";

export const initialState: State = {
  books: [],
  readingList: JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
  filteredBooks: [],
  detail: [],
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
    case "GET_BY_SEARCH": {
      return {
        ...state,
        filteredBooks: action.payload,
      };
    }
    case "GET_BY_PAGES": {
      return {
        ...state,
        filteredBooks: action.payload,
      };
    }
    case "ADD_TO_LECTURE_LIST": {
      const lectureList = [...state.readingList, action.payload];
      localStorage.setItem(localStorageKey, JSON.stringify(lectureList));
      return {
        ...state,
        readingList: lectureList,
      };
    }
    case "REMOVE_FROM_LECTURE_LIST": {
      const lectureList = state.readingList.filter(
        (book) => book.ISBN !== action.payload
      );
      localStorage.setItem(localStorageKey, JSON.stringify(lectureList));
      return {
        ...state,
        readingList: lectureList,
      };
    }
    case "SET_DETAIL": {
      return {
        ...state,
        detail: [action.payload],
      };
    }

    default:
      return state;
  }
};
