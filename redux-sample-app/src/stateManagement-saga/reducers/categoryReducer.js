import {
  CategoryFetchRequested,
  CategoryFetchSucceeded,
  CategoryFetchFailed,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  isLoading: true,
  message:''
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CategoryFetchRequested:
      return { ...state, isLoading: true };
    case CategoryFetchSucceeded:
      return {isLoading:false, items:action.categories};
    case CategoryFetchFailed:
      return {isLoading:false,message:action.message,items:[]};
    default:
      return state;
  }
}

export default categoryReducer;
