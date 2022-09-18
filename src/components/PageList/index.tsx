import * as S from './style';

interface Prop {
  total: number;
  page: number;
  dispatch: any;
  getList: any;
}

export default function PageList({ total, page, dispatch, getList }: Prop) {
  const pageArray = [];
  const pagination = Math.ceil(total / 4);

  for (let i = 0; i < pagination; i++) {
    const PAGE = i + 1;
    pageArray.push(
      <S.Page
        key={i}
        onClick={() => dispatch(getList(PAGE))}
        active={page === PAGE}
      >
        {PAGE}
      </S.Page>
    );
  }

  return <S.PageListStyle>{pageArray}</S.PageListStyle>;
}
