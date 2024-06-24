import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const StatusEquivalenciaProfissional = () => {
    const [showModal, setshowModal] = useState(false);
    const [showRelatorio, setshowRelatorio] = useState(false);
    const [showDescricao, setshowDescricao] = useState(false);
    const [showCarta, setshowCarta] = useState(false);

    

    const handleOpenModal = () => {
        setshowModal(true);
    };

    const handleCloseModal = () => {
        setshowModal(false);
    }

    const handleOpenRelatorio = () => {
        setshowRelatorio(true);
    };

    const handleCloseRelatorio = () => {
        setshowRelatorio(false);
    }

    const handleOpenDescricao = () => {
        setshowDescricao(true);
    };

    const handleCloseDescricao = () => {
        setshowDescricao(false);
    }

    const handleOpenCarta = () => {
        setshowCarta(true);
    };

    const handleCloseCarta = () => {
        setshowCarta(false);
    }


return (
    <>
    <TextForButtonContainer>
            <h2>Equivalencia Profissional</h2>
    </TextForButtonContainer>
    <TableContainer>
            <Table>
            <thead>
                <tr>
                <Th>Status</Th>
                <Th>Solicitação</Th>
                <Th>Data da Solicitação</Th>
                <Th>Requerimento de equivalência</Th>
                <Th>Carta de vínculo empregatício</Th>
                <Th>Descrição de atividades profissionais para equivalência</Th>
                <Th>Relatório de atividades profissionais para equivalência</Th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <Td>Não solicitado</Td>
                <Td>Não realizado</Td>
                <Td>2024-12-15</Td>
                <Td>Não enviado</Td>
                <Td>Não enviado</Td>
                <Td>Não enviado</Td>
                <Td>Não enviado</Td>
                </tr>
            </tbody>
            </Table>
        </TableContainer>
        <TextForButtonContainer>
            <h2>Equivalencia Profissional</h2>
          </TextForButtonContainer>
          <ButtonsContainer>
            <Button onClick={handleOpenModal}>Solicitar Equivalencia Profissional</Button>
            <Button onClick={handleOpenRelatorio}>Relatório de atividades profissionais para equivalência</Button>
            <Button onClick={handleOpenDescricao}>Descrição de atividades profissionais para equivalência</Button>
            <Button onClick={handleOpenCarta}>Carta de vínculo empregatício</Button>
          </ButtonsContainer>
    </>
);



};