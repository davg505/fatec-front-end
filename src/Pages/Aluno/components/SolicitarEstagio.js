import React, { useState } from "react";
import { ModalBackground, ModalContainer, Input, LabelContainer, CheckboxContainer  } from "../styles/SolicitarEstagio";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";


const SolicitarEstagio = ({ show, handleClose, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [estagioTipo, setEstagioTipo] = useState("obrigatorio");
    const [estagioModelo, setEstagioModelo] = useState("Remunerado");
  
    const onSubmit = () => {
        handleSubmit({ email, name, estagioTipo, estagioModelo });
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
              <label>Tipo de estágio:</label>
              <CheckboxContainer>
                <label>
                  <input
                    type="checkbox"
                    value="obrigatorio"
                    checked={estagioTipo === "obrigatorio"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                  />
                  Obrigatório
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="naoObrigatorio"
                    checked={estagioTipo === "naoObrigatorio"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                  />
                  Não Obrigatório
                </label>
              </CheckboxContainer>
            </LabelContainer>
            <LabelContainer>
              <label>Modelo:</label>
              <CheckboxContainer>
                <label>
                  <input
                    type="checkbox"
                    value="remunerado"
                    checked={estagioModelo === "remunerado"}
                    onChange={(e) => setEstagioModelo(e.target.value)}
                  />
                  Remunerado
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="naoRemunerado"
                    checked={estagioModelo === "naoRemunerado"}
                    onChange={(e) => setEstagioModelo(e.target.value)}
                  />
                  Não Remunerado
                </label>
              </CheckboxContainer>
            </LabelContainer>
            <LabelContainer>
              <label>Data inicial estágio:</label>
              <Input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Data final estágio:</label>
              <Input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Empresa:</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>CNPJ:</label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Endereço da empresa:</label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
  
  export default SolicitarEstagio;

