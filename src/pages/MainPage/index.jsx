import CommentListContainer from '../../containers/CommentListContainer';
import PageListContainer from '../../containers/PageListContainer';
import FormContainer from '../../containers/FormContainer';

function MainPage() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
};

export default MainPage;