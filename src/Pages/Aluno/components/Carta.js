import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const Carta = ({ show, handleClose, handleSubmit }) => {
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
            <h2>Relatórios</h2>
            <LabelContainer>
              <label>Carta de vínculo empregatício:</label>
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
  
  export default Carta;