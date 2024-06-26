import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const SolicitarIniciacao = ({ show, handleClose, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dataIncial, setDataIncial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [cnpj, setcnpj] = useState("");
    const [local, setlocal] = useState("");
    const [superior, setSupervisor] = useState("");
    const [tel, settel] = useState("");
    const [enviar, setEnviarTermo] = useState("");




    const onSubmit = () => {
        handleSubmit({ email, name, dataIncial, dataFinal, cnpj, local, superior, tel });
        handleClose();
      };
  
    if (!show) {
      return null;
    }
  
    return (
        <ModalBackground>
          <ModalContainer>
            <h2>Iniciação Cientifica</h2>
            <LabelContainer>
              <label>Início do Iniciação Cientifica:</label>
              <Input
                type="date"
                value={dataIncial}
                onChange={(e) => setDataIncial(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Instituição:</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Vigência Iniciação Científica:</label>
              <Input
                type="text"
                value={cnpj}
                onChange={(e) => setcnpj(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Município:</label>
              <Input
                type="text"
                value={local}
                onChange={(e) => setlocal(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Orientador:</label>
              <Input
                type="text"
                value={superior}
                onChange={(e) => setSupervisor(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Email:</label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Tel:</label>
              <Input
                type="text"
                value={tel}
                onChange={(e) => settel(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Apresentação do Orientador e Projeto de Iniciação Científica:</label>
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
  
  export default SolicitarIniciacao;

