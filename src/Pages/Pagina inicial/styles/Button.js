import styled from 'styled-components';

export const Button = styled.nav`
  background-color: black; /* Alterado para preto */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  &:hover {
    background-color: #333; /* Alterado para um tom mais escuro ao passar o mouse */
  }
`;