import React, { useState } from 'react';
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const TabelaSolicitacao = () => {
  const [alunos, setAlunos] = useState([]);

  

  return (
    <>
      <TextForButtonContainer>
        <h2>Total Solicitações - Geral </h2>
      </TextForButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Pedidos de solicitações </Th>
              <Th>Estágio</Th>
              <Th>Equivalência profissional</Th>
              <Th>Iniciação científica</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>32</Td>
              <Td>15</Td>
              <Td>1</Td>
              <Td>2</Td>
          </tr>
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

