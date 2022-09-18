import PageList from 'components/PageList';
import { useSelector, useDispatch } from 'react-redux';
import { paginationAction, LIMIT } from 'redux/modules/pagination';

function PageListContainer() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const changePage = (i) => dispatch(paginationAction(i));

  return <PageList comments={comments} changePage={changePage} limit={LIMIT} />;
}

export default PageListContainer;
