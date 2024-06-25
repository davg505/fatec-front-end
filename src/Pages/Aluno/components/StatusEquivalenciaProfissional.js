import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";
import CLT from "./CLT";
import CancelarEquivalencia from "./CancelarEquivalencia";
import Carta from "./Carta";
import Descricao from "./Descricao";
import Empreendedor from "./Empreendedor";
import Prestacao from "./Prestacao";
import Relatorio from "./Relatorio";
import SolicitarEquivalencia from "./SolicitarEquivalencia";

export const StatusEquivalenciaProfissional = () => {
    const [showModal, setshowModal] = useState(false);
    const [showRelatorio, setshowRelatorio] = useState(false);
    const [showDescricao, setshowDescricao] = useState(false);
    const [showCarta, setshowCarta] = useState(false);
    const [showCancelar, setShowCancelar] = useState(false);
    const [showCLT, setshowCLT] = useState(false);
    const [showEmpreendedor, setshowEmpreendedor] = useState(false);
    const [showPrestacao, setshowPrestacao] = useState(false);



    const handleOpenPrestacao = () => {
        setshowPrestacao(true);
    };

    const handleClosePrestacao = () => {
        setshowPrestacao(false);
    }
    
    const handleOpenEmpreendedor = () => {
        setshowEmpreendedor(true);
    };

    const handleCloseEmpreendedor = () => {
        setshowEmpreendedor(false);
    }
    const handleOpenCLT = () => {
        setshowCLT(true);
    };

    const handleCloseCLT = () => {
        setshowCLT(false);
    }

    const handleOpenModal = () => {
        setshowModal(true);
    };

    const handleCloseModal = () => {
        setshowModal(false);
    }

    const handleOpenCancelar = () => {
        setShowCancelar(true);
    };

    const handleCloseCancelar = () => {
        setShowCancelar(false);
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

    const handleSubmit = (data) => {
        console.log("Dados enviados:", data);
        // Aqui você pode adicionar a lógica para lidar com os dados enviados, como fazer uma chamada de API
    };


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
                <Th>Tipo de equivalência</Th>
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
            <Button onClick={handleOpenCancelar}>Cancelar Equivalencia Profissional</Button>
        </ButtonsContainer>
        <TextForButtonContainer>
            <h2>Documentos necessários de acordo com o tipo de equivalência</h2>
        </TextForButtonContainer>
        <ButtonsContainer>
            <Button onClick={handleOpenCLT}>CLT</Button>
            <Button onClick={handleOpenEmpreendedor}>Empreendedor</Button>
            <Button onClick={handleOpenPrestacao}>Prestação de serviço</Button>
        </ButtonsContainer>
        <TextForButtonContainer>
            <h2>Relatórios</h2>
        </TextForButtonContainer>
        <ButtonsContainer>
            <Button onClick={handleOpenRelatorio}>Relatório de atividades profissionais para equivalência</Button>
            <Button onClick={handleOpenDescricao}>Descrição de atividades profissionais para equivalência</Button>
            <Button onClick={handleOpenCarta}>Carta de vínculo empregatício</Button>
        </ButtonsContainer>
        <SolicitarEquivalencia
            show={showModal}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
        />
        <CancelarEquivalencia
            show={showCancelar}
            handleClose={handleCloseCancelar}
            handleSubmit={handleSubmit}
        />
        <CLT
            show={showCLT}
            handleClose={handleCloseCLT}
            handleSubmit={handleSubmit}
        />
        <Empreendedor
            show={showEmpreendedor}
            handleClose={handleCloseEmpreendedor}
            handleSubmit={handleSubmit}
        />
        <Prestacao
            show={showPrestacao}
            handleClose={handleClosePrestacao}
            handleSubmit={handleSubmit}
        />
        <Relatorio
            show={showRelatorio}
            handleClose={handleCloseRelatorio}
            handleSubmit={handleSubmit}
        />
        <Descricao
            show={showDescricao}
            handleClose={handleCloseDescricao}
            handleSubmit={handleSubmit}
        />
        <Carta
            show={showCarta}
            handleClose={handleCloseCarta}
            handleSubmit={handleSubmit}
        />
    </>
);



};