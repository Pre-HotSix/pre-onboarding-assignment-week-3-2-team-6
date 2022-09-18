import { combineReducers } from 'redux';
<<<<<<< HEAD
import commentsReducer from './comments';

const rootReducer = combineReducers({
  commentsReducer,
});

export default rootReducer;
=======
import { commentsReducer } from './comments';
import { singleCommentReducer } from './singleComment';
import { paginationReducer } from './pagination';

const rootReducer = combineReducers({
  comments: commentsReducer,
  singleComment: singleCommentReducer,
  pagination: paginationReducer
})

export default rootReducer;
>>>>>>> 3036ef0 (⚡️ Feature :  redux 사용을 위한 rootReducer 추가)
