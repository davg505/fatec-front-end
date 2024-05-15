import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { TextForButton } from "./TextForButton";

export const Buttons = () => {

  return (
    <>
      <TextForButton/>
      <ButtonsContainer>
        <Button>Curso</Button>
        <Button>Semestre</Button>
        <Button>Status</Button>
        <Button>Ano</Button>
        <Button>Obrigatorio</Button>
      </ButtonsContainer>
    </>
  );
};


