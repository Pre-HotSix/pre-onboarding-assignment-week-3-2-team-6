export const LIMIT = 4;

const PAGINATION = 'pagination/PAGINATION';
export function paginationAction(page) {
  return  {
    type: PAGINATION,
    page
  };
};

const initialState = 1;
export function paginationReducer(state = initialState, action) {
  if (action.type === PAGINATION) {
    return action.page;
  }

  return state;
};