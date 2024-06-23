import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const FinalizarEstagio = ({ show, handleClose, handleSubmit }) => {
    const [name, setName] = useState("");
    const [enviar, setEnviarTermo] = useState("");
  
    const onSubmit = () => {
        handleSubmit({ enviar, name });
        handleClose();
      };


  
    if (!show) {
      return null;
    }
  
    return (
        <ModalBackground>
          <ModalContainer>
            <h2>Finalizar Estágio</h2>
            <ButtonsContainer>
              <Button onClick={onSubmit}>Enviar</Button>
              <Button onClick={handleClose}>Cancelar</Button>
            </ButtonsContainer>
          </ModalContainer>
        </ModalBackground>
      );
    };
  
  export default FinalizarEstagio;

