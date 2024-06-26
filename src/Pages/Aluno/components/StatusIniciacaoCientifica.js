import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";
import CancelarIniciacao from "./CancelarIniciacao";
import CartaAvaliacao from "./CartaAvaliacao";
import CartaIC from "./CartaIC";
import RelatorioFinal from "./RelatorioFinal";
import RelatorioIC from "./RelatorioIC";
import RequerimentoIC from "./RequerimentoIC";
import SolicitarIniciacao from "./SolicitarIniciacao";


export const StatusIniciacaoCientifica = () => {
    const [showModal, setshowModal] = useState(false);
    const [showRelatorio, setshowRelatorio] = useState(false);
    const [showDescricao, setshowDescricao] = useState(false);
    const [showCarta, setshowCarta] = useState(false);
    const [showCancelar, setShowCancelar] = useState(false);
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

    const handleOpenRequerimento = () => {
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
            <h2>Iniciação Cientifica</h2>
    </TextForButtonContainer>
    <TableContainer>
            <Table>
            <thead>
                <tr>
                <Th>Status</Th>
                <Th>Solicitação</Th>
                <Th>Data da Solicitação</Th>
                <Th>Iniciação Cientifica</Th>
                <Th>Carta de avaliação do orientador</Th>
                <Th>Carta de validação da Iniciação Científica</Th>
                <Th>Apresentação do Orientador e Projeto de Iniciação Científica</Th>
                <Th>Carta de avaliação de desempenho</Th>
                <Th>Relatório final </Th>
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
                <Td>Não enviado</Td>
                </tr>
            </tbody>
            </Table>
        </TableContainer>
        <TextForButtonContainer>
            <h2>Iniciação Cientifica</h2>
        </TextForButtonContainer>
        <ButtonsContainer>
            <Button onClick={handleOpenModal}>Solicitar Iniciação Cientifica</Button>
            <Button onClick={handleOpenCancelar}>Cancelar Iniciação Cientifica</Button>
        </ButtonsContainer>
        <TextForButtonContainer>
            <h2>Documentos necessários</h2>
        </TextForButtonContainer>
        <ButtonsContainer>
            <Button onClick={handleOpenEmpreendedor}>Carta de avaliação de desempenho</Button>
            <Button onClick={handleOpenPrestacao}>Relatório final</Button>
        </ButtonsContainer>
        <TextForButtonContainer>
            <h2>Relatórios</h2>
        </TextForButtonContainer>
        <ButtonsContainer>
        <Button onClick={handleOpenRequerimento}>Requerimento de equivalência - iniciação científica</Button>
        <Button onClick={handleOpenRelatorio}>Relatorio equivalência IC para estágio supervisionado</Button>
        <Button onClick={handleOpenCarta}>Carta de avaliação de desempenho do aluno de iniciação científica</Button>
        </ButtonsContainer>
        <SolicitarIniciacao
            show={showModal}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
        />
        <CancelarIniciacao
            show={showCancelar}
            handleClose={handleCloseCancelar}
            handleSubmit={handleSubmit}
        />
        <CartaAvaliacao
            show={showEmpreendedor}
            handleClose={handleCloseEmpreendedor}
            handleSubmit={handleSubmit}
        />
        <RelatorioFinal
            show={showPrestacao}
            handleClose={handleClosePrestacao}
            handleSubmit={handleSubmit}
        />
        <RelatorioIC
            show={showRelatorio}
            handleClose={handleCloseRelatorio}
            handleSubmit={handleSubmit}
        />
        <RequerimentoIC
            show={showDescricao}
            handleClose={handleCloseDescricao}
            handleSubmit={handleSubmit}
        />
        <CartaIC
            show={showCarta}
            handleClose={handleCloseCarta}
            handleSubmit={handleSubmit}
        />
    </>
);



};