import styled from "styled-components";
import {CaretRightFill} from "@styled-icons/bootstrap"

export const Container = styled.main`
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
`;

export const Navbar = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-bottom: 40%;
  background: ${({ theme }) => theme.currentLine};
  color: ${({ theme }) => theme.comment};
`;

export const PageTitle = styled.h3``

export const BottomWrapper = styled.div`
  display: flex;
  margin-top: auto;
  padding: 10px;
  height: 60px;
  background: ${({ theme }) => theme.currentLine};
`

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  font-size: 16px;
  box-sizing: border-box;
  transition: .5s;
  border-radius: 25px 0 0 25px;
  border: none;
  outline: none;
  padding: 0px 5px 0px 10px;
  background-color: ${({ theme }) => theme.background};
  color: white;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  transition: .5s;
  border-radius: 0px 25px 25px 0px;
  border: none;
  outline: none;
  padding: 0 10px 0 5px;
  background-color: ${({ theme }) => theme.comment};
  color: white;
  
`

export const ButtonIcon = styled(CaretRightFill)`
  height: 20px;
`