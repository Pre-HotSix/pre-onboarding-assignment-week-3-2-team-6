import PageList from '../../components/PageList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCommentsList,
  getCommentListLength,
} from '../../redux/modules/comments';
import { RootState } from '../../redux/modules';

export default function PageListContainer() {
  const { page, total, comments } = useSelector(
    (state: RootState) => state.commentsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentListLength());
  }, [comments]);

  return (
    <PageList
      total={total}
      page={page}
      dispatch={dispatch}
      getList={getCommentsList}
    />
  );
}
