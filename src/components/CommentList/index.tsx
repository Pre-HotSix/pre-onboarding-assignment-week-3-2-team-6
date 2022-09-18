import * as S from './style';

interface Prop {
  comment: {
    id: number;
    profile_url: string;
    author: string;
    content: string;
    createdAt: string;
  };
  put: any;
  remove: any;
}

export default function CommentList({ remove, put, comment }: Prop) {
  return (
    <S.Comment key={comment.id}>
      <img src={comment.profile_url} alt="" />
      {comment.author}
      <S.CreatedAt>{comment.createdAt}</S.CreatedAt>
      <S.Content>{comment.content}</S.Content>
      <S.Button>
        <a onClick={() => put(comment.id)}>수정</a>
        <a onClick={() => remove(comment.id)}>삭제</a>
      </S.Button>
      <hr />
    </S.Comment>
  );
}
