import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;