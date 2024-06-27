import React, { useState } from 'react';
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const TabelaSolicitacaoIC = () => {
  const [alunos, setAlunos] = useState([]);

  

  return (
    <>
      <TextForButtonContainer>
        <h2>Solicitações - Iniciação científica - IC </h2>
      </TextForButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Pedidos de solicitações </Th>
              <Th>Em andamento</Th>
              <Th>Canceladas</Th>
              <Th>Concluidas</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>5 </Td>
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

