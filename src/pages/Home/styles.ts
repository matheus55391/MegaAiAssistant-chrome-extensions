import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
  height: 34px;
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-bottom: 40%;
`;