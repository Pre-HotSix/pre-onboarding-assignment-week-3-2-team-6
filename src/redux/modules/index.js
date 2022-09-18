import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { singleCommentReducer } from './singleComment';
import { paginationReducer } from './pagination';

const rootReducer = combineReducers({
  comments: commentsReducer,
  singleComment: singleCommentReducer,
  pagination: paginationReducer
})

export default rootReducer;