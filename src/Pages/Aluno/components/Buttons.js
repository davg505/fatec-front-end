import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { TextForButton } from "./TextForButton";

export const Buttons = ({ onEstagioClick, OnEquivalenciaClick }) => {
  
  return (
    <>
    <TextForButton/>
      <ButtonsContainer>
        <Button onClick={onEstagioClick}>Estágio</Button>
        <Button onClick={OnEquivalenciaClick}>Equivalencia Profissional</Button>
        <Button>Iniciação Cientifica</Button>
      </ButtonsContainer>
    </>
  );
};