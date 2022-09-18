import { getAllCommentsApi, deleteCommentApi, postCommentApi, putCommentApi } from '../../apis/axios';
import { ERROR, errorAction } from './error';

const GET_ALLCOMMENTS = 'getAllComments';
function getAllAction(data) {
  return  {
    type: GET_ALLCOMMENTS,
    data
  };
};

const DELETE_COMMENT = 'deleteComment';
function deleteCommentAction(commentId) {
  return  {
    type: DELETE_COMMENT,
    commentId
  };
};

const POST_COMMENT = 'postComment';
function postCommentAction(data) {
  return  {
    type: POST_COMMENT,
    data
  };
};

const PUT_COMMENT = 'putComment';
function putCommentAction(data, commentId) {
  return  {
    type: PUT_COMMENT,
    data,
    commentId
  };
};

export function getAllThunk() {
  return async (dispatch) => {
    try {
      const data = await getAllCommentsApi();
      dispatch(getAllAction(data));
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
};

export function deleteCommentThunk(commentId) {
  return async (dispatch) => {
    try {
      await deleteCommentApi(commentId);
      dispatch(deleteCommentAction(commentId));
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
};

export function postCommentThunk({ profile_url, author, content, createdAt }) {
  return async (dispatch) => {
    try {
      const data = await postCommentApi({ profile_url, author, content, createdAt });
      dispatch(postCommentAction(data));
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
};

export function putCommentThunk(commentId, { profile_url, author, content, createdAt }) {
  return async (dispatch) => {
    try {
      const data = await putCommentApi(commentId, { profile_url, author, content, createdAt });
      dispatch(putCommentAction(data, commentId));
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
};

const initialState = [];
export function commentsReducer(state = initialState, action) {
  switch (action.type) {
		case GET_ALLCOMMENTS:
			return [ ...action.data ];
		case DELETE_COMMENT: {
      const actionData = state.filter(comment => comment.id !== action.commentId);
      return [ ...actionData ];
    }
		case POST_COMMENT:
			return [ action.data, ...state ];
		case PUT_COMMENT: {
      const actionData = state.map(comment => {
        if (comment.id === action.commentId) return action.data;
        return comment;
      });
      return [ ...actionData ];
    }
    case ERROR:
			return state;
		default:
			return state
	}
};