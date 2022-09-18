import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllThunk, deleteCommentThunk } from 'redux/modules/comments';
import { getCommentThunk } from 'redux/modules/singleComment';
import { paginationAction, LIMIT } from 'redux/modules/pagination';
import CommentList from 'components/CommentList';

export default function CommentListContainer() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const singleComment = useSelector((state) => state.singleComment);
  const pagination = useSelector((state) => state.pagination);
  const offset = (pagination - 1) * LIMIT;

  useEffect(() => {
    dispatch(getAllThunk());
  }, []);

  const deleteData = (id) => {
    dispatch(deleteCommentThunk(id));
    dispatch(paginationAction(1));
  };

  const getData = (id) => {
    if (Object.keys(singleComment).length !== 0)
      alert(
        '기존 폼을 *수정 완료* 혹은 *수정 취소* 후, 수정 할 댓글을 다시 선택해주세요'
      );
    else dispatch(getCommentThunk(id));
  };

  return comments
    .slice(offset, offset + LIMIT)
    .map((comment) => (
      <CommentList
        key={comment.id}
        comment={comment}
        getData={getData}
        deleteData={deleteData}
      />
    ));
}
