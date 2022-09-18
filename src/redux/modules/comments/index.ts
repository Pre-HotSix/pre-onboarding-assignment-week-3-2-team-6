import * as API from '../../../apis';

const getComments = (state: any, page: any) => ({
  type: 'GET_COMMENTS',
  state,
  page,
});
const getOneComment = (state: any) => ({ type: 'GET_ONE_COMMENT', state });
const getTotalLength = (state: any) => ({ type: 'GET_TOTAL_LENGTH', state });

export const getCommentsList = (page: number) => async (dispatch: any) => {
  try {
    const comments = await API.getCommentListPerPage(page);
    dispatch(getComments(comments, page));
  } catch (e) {
    throw new Error();
  }
};

export const getComment = (id: number) => async (dispatch: any) => {
  try {
    const comment = await API.getComment(id);
    dispatch(getOneComment(comment));
  } catch (e) {
    throw new Error();
  }
};

export const removeComment = (id: number) => async (dispatch: any) => {
  try {
    await API.removeComment(id).then(() => dispatch(getCommentsList(1)));
  } catch (e) {
    throw new Error();
  }
};

export const createComment = (data: any) => async (dispatch: any) => {
  try {
    const res = await API.createComment(data);
    dispatch({ res });
  } catch (e) {
    throw new Error();
  }
};

export const editComment =
  (id: number, data: any, page: number) => async (dispatch: any) => {
    try {
      return await API.editComment(id, data)
        .then(() => dispatch(getCommentsList(page)))
        .then(() => dispatch(getOneComment({})));
    } catch (e) {
      throw new Error();
    }
  };

export const getCommentListLength = () => async (dispatch: any) => {
  try {
    const commentsLength = await API.getCommentListLength();
    dispatch(getTotalLength(commentsLength));
  } catch (e) {
    throw new Error();
  }
};

const INITIAL_STATE = {
  comments: [],
  comment: {},
  page: 0,
  total: 0,
};

export default function commentsReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return { ...state, comments: action.state, page: action.page };

    case 'GET_ONE_COMMENT':
      return { ...state, comment: action.state };

    case 'GET_TOTAL_LENGTH':
      return { ...state, total: action.state };

    case 'POST_COMMENT':
      return { ...state, comment: action.state };

    default:
      return state;
  }
}
