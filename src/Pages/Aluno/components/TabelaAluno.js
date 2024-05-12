import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";


export const TabelaAluno = () => (
    <>
      <TextForButtonContainer>
        <h2>Aluno</h2>
      </TextForButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Nome do aluno</Th>
              <Th>Email</Th>
              <Th>Ra</Th>
              <Th>Curso</Th>
              <Th>Status</Th>
              <Th>Modalidade</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Aluno</Td>
              <Td>aluno@fatec.br</Td>
              <Td>1000016816561</Td>
              <Td>GTI</Td>
              <Td>Sem solicitação</Td>
              <Td>Sem definição</Td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </>
  );

