import React, { useState } from 'react';
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const TabelaAluno = () => {
  const [alunos, setAlunos] = useState([]);


  return (
    <>
      <TextForButtonContainer>
        <h2>Lista de alunos</h2>
      </TextForButtonContainer>
      <TableContainer>
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
          {[...Array(20)].map((_, index) => (
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
    </tr>
  ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

