import styled from 'styled-components';

export const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Page = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background: ${(prop) => (prop.active ? 'gray' : 'inherit')};
  color: ${(prop) => (prop.active ? '#fff' : 'black')};
  margin-right: 3px;
`;
