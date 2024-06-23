import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { CheckboxContainer, Input, LabelContainer, ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const RecisaoEstagio = ({ show, handleClose, handleSubmit }) => {
    const [dataRecisao, setDataRecisao] = useState("");
    const [name, setName] = useState("");
    const [enviar, setEnviarTermo] = useState("");
    const [estagioTipo, setEstagioTipo] = useState("obrigatorio");

    const onSubmit = () => {
        handleSubmit({ enviar, name, estagioTipo, dataRecisao });
        handleClose();
    };

    if (!show) {
    return null;
    }

    return (
        <ModalBackground>
        <ModalContainer>
            <h2>Recisão de Termo de Compromisso de Estágio</h2>
            <LabelContainer>
            <label>Data recisão:</label>
            <Input
                type="date"
                value={dataRecisao}
                onChange={(e) => setDataRecisao(e.target.value)}
            />
            </LabelContainer>
            <LabelContainer>
            <label>Motivo rescindido o estagio por:</label>
            <CheckboxContainer>
                <label>
                <input
                    type="checkbox"
                    value="obrigatorio"
                    checked={estagioTipo === "obrigatorio"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                />
                Contratação do estagiário em regime CLT
                </label>
                <label>
                <input
                    type="checkbox"
                    value="text1"
                    checked={estagioTipo === "text1"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                />
                Por iniciativa da empresa
                </label>
                <label>
                <input
                    type="checkbox"
                    value="text2"
                    checked={estagioTipo === "text2"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                />
                Situação irregular de matrícula do estudante
                </label>
                <label>
                <input
                    type="checkbox"
                    value="text3"
                    checked={estagioTipo === "text3"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                />
                Por iniciativa do estudante
                </label>
                <label>
                <input
                    type="checkbox"
                    value="outro"
                    checked={estagioTipo === "outro"}
                    onChange={(e) => setEstagioTipo(e.target.value)}
                />
                Outro
                </label>
            </CheckboxContainer>
            </LabelContainer>
            <LabelContainer>
            <label>Outro Motivo:</label>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </LabelContainer>
            <LabelContainer>
            <label>Enviar termo aditivo de recisão para empresa:</label>
            <Input
                type="file"
                value={enviar}
                onChange={(e) => setEnviarTermo(e.target.value)}
            />
            </LabelContainer>
            <LabelContainer>
            <label>Enviar termo aditivo de recisão para fatec:</label>
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

export default RecisaoEstagio;

