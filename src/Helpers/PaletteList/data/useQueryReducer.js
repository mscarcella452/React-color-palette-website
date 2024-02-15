import { useReducer } from "react";

const initialQueryValues = {
  querySearch: "",
  queryTags: [],
};

const queryReducer = (state, action) => {
  switch (action.type) {
    case "update_tags":
      const updatedTags = state.queryTags.includes(action.color)
        ? state.queryTags.filter(tag => tag !== action.color)
        : [...state.queryTags, action.color];

      return { ...state, queryTags: updatedTags };

    case "update_search":
      return { ...state, querySearch: action.searchValue };

    case "clear_query":
      return initialQueryValues;

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const useQueryReducer = () => {
  const [query, queryDispatch] = useReducer(queryReducer, initialQueryValues);
  return [query, queryDispatch];
};

export default useQueryReducer;
