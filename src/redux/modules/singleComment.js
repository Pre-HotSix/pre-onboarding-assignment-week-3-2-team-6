import { getCommentApi } from '../../apis/axios';
import { ERROR, errorAction } from './error';

const GET_COMMENT = 'getComment';
function getCommentAction(data) {
  return  {
    type: GET_COMMENT,
    data
  };
};

const RESET_FORM = 'resetForm';
export function resetFormAction() {
  return  {
    type: RESET_FORM
  };
};

export function getCommentThunk(commentId) {
  return async (dispatch) => {
    try {
      const data = await getCommentApi(commentId);
      dispatch(getCommentAction(data));
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
};

const initialState = {};
export function singleCommentReducer(state = initialState, action) {
  switch (action.type) {
		case GET_COMMENT:
			return { ...action.data };
		case RESET_FORM:
      return {};
    case ERROR:
      return state;
		default:
			return {};
	}
};