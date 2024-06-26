import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { ModalBackground, ModalContainer } from "../styles/SolicitarEstagio";


const CancelarIniciacao = ({ show, handleClose, handleSubmit }) => {
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
            <h2>Solicitar cancelamento do Iniciação Cientifica</h2>
            <ButtonsContainer>
            <Button onClick={onSubmit}>Enviar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
            </ButtonsContainer>
        </ModalContainer>
        </ModalBackground>
    );
    };

export default CancelarIniciacao;