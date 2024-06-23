
import React, { useState } from "react";
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";
import AlterarStutusEstagio from "./AlterarStutusEstagio";
import CancelarTermoDoEstagio from "./CancelarTermoDoEstagio";
import EnviarTermoDoEstagio from "./EnviarTermoDoEstagio";
import ProrrogacaoPeriodoEstagio from "./ProrrogacaoPeriodoEstagio";
import RecisaoEstagio from "./RecisaoEstagio";
import SolicitarEstagio from "./SolicitarEstagio";

export const StatusEstagio = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEnviarTermo, setshowEnviarTermo] = useState(false);
    const [showCancelarTermo, setshowCancelarTermo] = useState(false);
    const [showProrrogacao, setshowProrrogacao] = useState(false);
    const [showAlterar, setshowAlterar] = useState(false);
    const [showRecisao, setshowRecisao] = useState(false);
    
    const handleOpenRecisao = () => {
      setshowRecisao(true);
    };

    const handleCloseRecisao = () => {
      setshowRecisao(false);
    };

    const handleOpenAlterar = () => {
      setshowAlterar(true);
    };

    const handleCloseAlterar = () => {
      setshowAlterar(false);
    };

    const handleOpenProrrogacao = () => {
      setshowProrrogacao(true);
    };

    const handleCloseProrrogacao = () => {
      setshowProrrogacao(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleOpenEnviar = () => {
        setshowEnviarTermo(true);
      };
    
      const handleCloseEnviar = () => {
        setshowEnviarTermo(false);
      };

      const handleOpenCancelar = () => {
        setshowCancelarTermo(true);
      };
    
      const handleCloseCancelar = () => {
        setshowCancelarTermo(false);
      };


      const handleSubmit = (data) => {
        console.log("Dados enviados:", data);
        // Aqui você pode adicionar a lógica para lidar com os dados enviados, como fazer uma chamada de API
      };


      return (
        <>
          <TextForButtonContainer>
            <h2>Estágio</h2>
          </TextForButtonContainer>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <Th>Status</Th>
                  <Th>Tipo de estágio</Th>
                  <Th>Modelo</Th>
                  <Th>Solicitação</Th>
                  <Th>Data da Solicitação</Th>
                  <Th>Status do Termo</Th>
                  <Th>Prorrogação de período</Th>
                  <Th>Estágio não Obrigatório para Obrigatório</Th>
                  <Th>Rescisão do termo</Th>
                  <Th>Relatório de estágio supervisionado</Th>
                  <Th>Ficha de avaliação do superior imediato</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Não solicitado</Td>
                  <Td>Obrigatório</Td>
                  <Td>Remunerado</Td>
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
            <h2>Início estágio</h2>
          </TextForButtonContainer>
          <ButtonsContainer>
            <Button onClick={handleOpenModal}>Solicitar Estágio</Button>
            <Button onClick={handleOpenEnviar}>Enviar Termo do Estágio</Button>
            <Button onClick={handleOpenCancelar}>Cancelar Solicitação</Button>
          </ButtonsContainer>
          <TextForButtonContainer>
            <h2>Durante estágio</h2>
          </TextForButtonContainer>
          <ButtonsContainer>
            <Button onClick={handleOpenProrrogacao}>Prorrogação de período</Button>
            <Button onClick={handleOpenAlterar}>Estágio não Obrigatório para Obrigatório</Button>
            <Button onClick={handleOpenRecisao}>Rescisão do termo de compromisso de estágio</Button>
          </ButtonsContainer>
          <TextForButtonContainer>
            <h2>Entregas finais estágio</h2>
          </TextForButtonContainer>
          <ButtonsContainer>
            <Button>Enviar Relatório de estágio supervisionado</Button>
            <Button>Enviar Ficha de avaliação do superior imediato</Button>
            <Button>Enviar Finalização do Estágio</Button>
          </ButtonsContainer>
          <SolicitarEstagio
            show={showModal}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
          />
          <EnviarTermoDoEstagio
            show={showEnviarTermo}
            handleClose={handleCloseEnviar}
            handleSubmit={handleSubmit}
          />
          <CancelarTermoDoEstagio
            show={showCancelarTermo}
            handleClose={handleCloseCancelar}
            handleSubmit={handleSubmit}
          />
          <ProrrogacaoPeriodoEstagio
            show={showProrrogacao}
            handleClose={handleCloseProrrogacao}
            handleSubmit={handleSubmit}
          />
          <AlterarStutusEstagio
            show={showAlterar}
            handleClose={handleCloseAlterar}
            handleSubmit={handleSubmit}
          />
          <RecisaoEstagio
            show={showRecisao}
            handleClose={handleCloseRecisao}
            handleSubmit={handleSubmit}
          />
        </>
      );
    };

