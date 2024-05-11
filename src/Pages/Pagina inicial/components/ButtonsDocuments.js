
import React from 'react';
import { Button } from "../styles/Button";
import { ButtonsDocumentsContainer } from "../styles/ButtonsDocumentsContainer";

const ButtonsDocuments = () => {
    const handleLegislationClick = () => {
      window.open('https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm', '_blank');
    };

    const handleGuiaDoEstagíarioClick = () => {
        window.open('https://fateccampinas.com.br/site/images/Est%C3%A1gio_Supervisionado/1-GUIA_DO_ESTAGI%C3%81RIO-_FATEC__revis%C3%A3o_03_08_2022.pdf', '_blank');
      };
  
    return (
      <ButtonsDocumentsContainer>
        <Button onClick={handleLegislationClick}>Legislação para Estágio</Button>
        <Button onClick={ handleGuiaDoEstagíarioClick}>Guia do Estagíario</Button>
      </ButtonsDocumentsContainer>
    );
  };
  
  export default ButtonsDocuments;