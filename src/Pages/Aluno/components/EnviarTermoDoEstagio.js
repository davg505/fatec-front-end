import React, { useState } from "react";
import { ModalBackground, ModalContainer, Input, LabelContainer } from "../styles/SolicitarEstagio";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";


const EnviarTermoDoEstagio = ({ show, handleClose, handleSubmit }) => {
    const [enviar, setEnviarTermo] = useState("");
  
    const onSubmit = () => {
        handleSubmit({ enviar });
        handleClose();
      };
  
    if (!show) {
      return null;
    }
  
    return (
        <ModalBackground>
          <ModalContainer>
            <h2>Solicitar Estágio</h2>
            <LabelContainer>
              <label>Enviar termo estágio:</label>
              <Input
                type="file"
                value={enviar}
                onChange={(e) => setEnviarTermo(e.target.value)}
              />
            </LabelContainer>
            <ButtonsContainer>
              <Button onClick={onSubmit}>Enviar</Button>
              <Button onClick={handleClose}>Cancelar</Button>
            </ButtonsContainer>
          </ModalContainer>
        </ModalBackground>
      );
    };
  
  export default EnviarTermoDoEstagio;

