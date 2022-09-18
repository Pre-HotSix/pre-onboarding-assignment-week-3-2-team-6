import * as S from './style';

export default function PageList({ comments, changePage, limit }) {
  const pageArray = [];

  for (let i = 1; i <= Math.ceil(comments.length / limit); i++) {
    pageArray.push(
      <S.PageButton key={i} onClick={() => changePage(i)}>
        {i}
      </S.PageButton>
    );
  }

  return <S.PageListStyle>{pageArray}</S.PageListStyle>;
}
