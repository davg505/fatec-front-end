import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";

export const Buttons = () => {

  return (
    <>
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


