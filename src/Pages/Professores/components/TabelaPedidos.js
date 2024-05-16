import React, { useState } from 'react';
import { Table, TabelaSolicitacaoContainer, Td, Th,  } from "../styles/TableContainer";
import { Button } from "../styles/Button";

export const TabelaPedidos = () => {
  const [alunos, setAlunos] = useState([]);

  const handleAprovadoClick = (index) => {
    // Lógica para marcar o aluno como aprovado
  };

  const handleReprovadoClick = (index) => {
    // Lógica para marcar o aluno como reprovado
  };

  const handleEnviarDiretorClick = (index) => {
    // Lógica para marcar o aluno como reprovado
  };



  return (
    <>
      <TabelaSolicitacaoContainer>
        <Table>
          <thead>
            <tr>
              <Th>Nome do aluno</Th>
              <Th>Email</Th>
              <Th>Ra</Th>
              <Th>Curso</Th>
              <Th>Semestre</Th>
              <Th>Data Inicial</Th>
              <Th>Data Final</Th>
              <Th>Ano</Th>
              <Th>Agente Integrador</Th>
              <Th>Empresa</Th>
              <Th>Status</Th>
              <Th>Obrigatorio</Th>
            </tr>
          </thead>
          <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
            <Td>Aluno {index + 1}</Td>
            <Td>aluno{index + 1}@email.com</Td>
            <Td>123456</Td>
            <Td>Curso {index % 3 + 1}</Td>
            <Td>{index % 2 + 1}</Td>
            <Td>2022-01-01</Td>
            <Td>2022-06-30</Td>
            <Td>2022</Td>
            <Td>Agente {index % 5 + 1}</Td>
            <Td>Empresa {index % 4 + 1}</Td>
            <Td>Ativo</Td>
            <Td>Sim</Td>
            <Td>
                <Button onClick={() => handleAprovadoClick(index)}>Aprovado</Button> {/* Botão de Aprovado */}
            </Td>
            <Td>
                <Button onClick={() => handleReprovadoClick(index)}>Reprovado</Button> {/* Botão de Reprovado */}
            </Td>
            <Td>
                <Button onClick={() => handleEnviarDiretorClick(index)}>Enviar Diretor</Button> {/* Botão de Reprovado */}
            </Td>
            </tr>
  ))}
          </tbody>
        </Table>
      </TabelaSolicitacaoContainer>
    </>
  );
};



