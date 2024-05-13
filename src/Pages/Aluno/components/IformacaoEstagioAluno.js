import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";


  export const IformacaoEstagioAluno = () => (
    <>
      <TextForButtonContainer>
        <h2>Supervisor de estágio da FATEC-CAMPINAS</h2>
      </TextForButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Curso</Th>
              <Th>Periodo</Th>
              <Th>Professor</Th>
              <Th>Email</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>GTI</Td>
              <Td>Matutino</Td>
              <Td>Nome professor</Td>
              <Td>professor@fatec.br</Td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
