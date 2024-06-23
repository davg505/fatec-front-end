import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const AlterarStutusEstagio = ({ show, handleClose, handleSubmit }) => {
    const [name, setName] = useState("");
    const [valor, setValor] = useState("");
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
            <h2>Estágio não obrigatório para obrigatório</h2>
            <LabelContainer>
              <label>Data Alteração:</label>
              <Input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Bolsa Auxílio no valor :</label>
              <Input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Enviar Estágio não obrigatório para obrigatório para empresa:</label>
              <Input
                type="file"
                value={enviar}
                onChange={(e) => setEnviarTermo(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Enviar Estágio não obrigatório para obrigatório para fatec:</label>
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
  
  export default AlterarStutusEstagio;

