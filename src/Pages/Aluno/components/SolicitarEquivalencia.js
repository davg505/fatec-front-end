import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { CheckboxContainer, Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const SolicitarEquivalencia = ({ show, handleClose, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dataIncial, setDataIncial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [cnpj, setcnpj] = useState("");
    const [local, setlocal] = useState("");
    const [superior, setSupervisor] = useState("");
    const [tel, settel] = useState("");
    const [enviar, setEnviarTermo] = useState("");
    const [estagioTipo, setEstagioTipo] = useState("clt");



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
            <h2>Solicitar Equivalencia Profissional</h2>
            <LabelContainer>
              <label>Início do vínculo empregatício:</label>
              <Input
                type="date"
                value={dataIncial}
                onChange={(e) => setDataIncial(e.target.value)}
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
                value={cnpj}
                onChange={(e) => setcnpj(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Local do Estágio (município):</label>
              <Input
                type="text"
                value={local}
                onChange={(e) => setlocal(e.target.value)}
              />
            </LabelContainer>
            <LabelContainer>
              <label>Supervisor:</label>
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
              <label>Selecionar qual tipo documento:</label>
              <CheckboxContainer>
                <label>
                  <input
                    type="checkbox"
                    value="clt"
                    checked={estagioTipo === "clt"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                  />
                  CLT
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="empreendedor"
                    checked={estagioTipo === "empreendedor"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                  />
                Empreendedor
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="pestacaoServico"
                    checked={estagioTipo === "pestacaoServico"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                  />
                Prestação de serviço
                </label>
              </CheckboxContainer>
            </LabelContainer>
            <LabelContainer>
              <label>Relatório final, constando atividades exercidas:</label>
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
  
  export default SolicitarEquivalencia;

