import React, { useState } from 'react';
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const TabelaSolicitacao = () => {
  const [alunos, setAlunos] = useState([]);

  

  return (
    <>
      <TextForButtonContainer>
        <h2>Total Solicitações </h2>
      </TextForButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Pedidos de solicitações </Th>
              <Th>Solicitações em andamento</Th>
              <Th>Solicitações Canceladas</Th>
              <Th>Solicitações Concluidas</Th>
              <Th>Solicitações conclussão de estagio</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>5 </Td>
              <Td>15</Td>
              <Td>1</Td>
              <Td>2</Td>
              <Td>2</Td>
          </tr>
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

