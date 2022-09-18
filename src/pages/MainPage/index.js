import CommentListContainer from 'containers/CommentListContainer';
import PageListContainer from 'containers/PageListContainer';
import FormContainer from 'containers/FormContainer';

export default function MainPage() {
  return (
    <>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </>
  );
};