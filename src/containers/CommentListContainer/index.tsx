import CommentList from '../../components/CommentList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCommentsList,
  getComment,
  removeComment,
} from '../../redux/modules/comments';
import { RootState } from '../../redux/modules';

interface Prop {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export default function CommentListContainer() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: RootState) => state.commentsReducer);

  const delComment = async (commentId: number) => {
    confirm('삭제 하시겠습니까?') && dispatch(removeComment(commentId));
  };
  const putComment = async (commentId: number) =>
    dispatch(getComment(commentId));

  useEffect(() => {
    dispatch(getCommentsList(1));
  }, [dispatch, getCommentsList]);

  return comments.map((comment: Prop) => (
    <CommentList
      key={comment.id}
      comment={comment}
      remove={delComment}
      put={putComment}
    />
  ));
}
