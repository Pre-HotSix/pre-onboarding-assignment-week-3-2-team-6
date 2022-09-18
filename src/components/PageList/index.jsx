import * as S from './style';
import { useSelector, useDispatch } from "react-redux";
import { paginationAction, LIMIT } from '../../redux/modules/pagination';

function PageList() {
  const pageArray = [];
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const changePage = (i) => dispatch(paginationAction(i));

  for (let i = 1; i <= Math.ceil(comments.length / LIMIT); i++) {
    pageArray.push(
      <S.PageButton key={i} onClick={() => changePage(i)}>{i}</S.PageButton>
    );
  };


  return <S.PageListStyle>{pageArray}</S.PageListStyle>;
}

export default PageList;