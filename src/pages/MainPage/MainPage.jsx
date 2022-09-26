import React from 'react';
import CommentListContainer from '../../containers/CommentListContainer';
import PageListContainer from '../../containers/PageListContainer';
import FormContainer from '../../containers/FormContainer';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Container>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;
