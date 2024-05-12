import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";

export const Buttons = () => {
 // const [showLogin, setShowLogin] = useState(false);

 // const handleAlunoClick = () => {
  //  setShowLogin(true);
 // };

 // const handleCloseLogin = () => {
  //  setShowLogin(false);
 // };

  return (
    <>
      <ButtonsContainer>
        <Button>Estágio</Button>
        <Button>Equivalencia Profissional</Button>
        <Button>Iniciação Cientifica</Button>
      </ButtonsContainer>
    </>
  );
};