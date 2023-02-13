import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.currentLine};
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40%;
`;