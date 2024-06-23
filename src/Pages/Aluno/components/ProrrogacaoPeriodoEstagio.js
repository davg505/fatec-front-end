import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const ProrrogacaoPeriodoEstagio = ({ show, handleClose, handleSubmit }) => {
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
            <h2>Prorrogação do Estágio</h2>
            <LabelContainer>
              <label>Data prorrogação:</label>
              <Input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Enviar termo aditivo de prorrogação para empresa:</label>
              <Input
                type="file"
                value={enviar}
                onChange={(e) => setEnviarTermo(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Enviar termo aditivo de prorrogação para fatec:</label>
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
  
  export default ProrrogacaoPeriodoEstagio;

