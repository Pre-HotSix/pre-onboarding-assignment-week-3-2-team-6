import * as S from './style';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllThunk, deleteCommentThunk } from '../../redux/modules/comments';
import { getCommentThunk } from '../../redux/modules/singleComment';
import { paginationAction, LIMIT } from '../../redux/modules/pagination';

function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const singleComment = useSelector(state => state.singleComment);
  const pagination = useSelector(state => state.pagination);
  const offset = (pagination - 1) * LIMIT;

  useEffect(() => {
    dispatch(getAllThunk());
  }, []);

  const deleteData = (id) => {
    dispatch(deleteCommentThunk(id));
    dispatch(paginationAction(1));
  };
  const getData = (id) => {
    if (Object.keys(singleComment).length !== 0) alert('기존 폼을 *수정 완료* 혹은 *수정 취소* 후, 수정 할 댓글을 다시 선택해주세요');
    else dispatch(getCommentThunk(id));
  };

  const commentLists = comments.slice(offset, offset + LIMIT).map((comment, index) => {
    return (
      <S.CommentBox key={index}>
        <img src={comment.profile_url} alt="프로필 이미지" />
        <span>{comment.author}</span>
        <S.CreatedAtBox>{comment.createdAt}</S.CreatedAtBox>
        <S.ContentBox>{comment.content}</S.ContentBox>
        <S.ButtonBox>
          <button onClick={() => getData(comment.id)}>수정</button>
          <button onClick={() => deleteData(comment.id)}>삭제</button>
        </S.ButtonBox>
        <hr />
      </S.CommentBox>
    );
  });


  return commentLists;
};

export default CommentList;