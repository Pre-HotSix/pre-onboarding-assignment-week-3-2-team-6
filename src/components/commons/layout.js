import { Outlet } from "react-router-dom";
import styled from 'styled-components';

export default function Layout() {
  return (
    <LayoutContainer>
      <LayoutBox>
        <Outlet />
      </LayoutBox>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const LayoutBox = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  border: 5px solid white;
  background-color: white;
`;