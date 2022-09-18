import * as S from './style';

export default function CommentList({ comment, getData, deleteData }) {
  return (
    <S.CommentBox key={comment.id}>
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
}
