import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";

export const Buttons = ({ onEstagioClick }) => {
  
  return (
    <>
      <ButtonsContainer>
        <Button onClick={onEstagioClick}>Estágio</Button>
        <Button>Equivalencia Profissional</Button>
        <Button>Iniciação Cientifica</Button>
      </ButtonsContainer>
    </>
  );
};