
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { Table, TableContainer, Td, Th } from "../styles/TableContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";

export const StatusEstagio = () => (
<>
<TextForButtonContainer>
    <h2>Estágio</h2>
</TextForButtonContainer>
<TableContainer>
    <Table>
    <thead>
        <tr>
        <Th>Status</Th>
        <Th>Tipo de estagio</Th>
        <Th>Modelo</Th>
        <Th>Solicitação</Th>
        <Th>Data da Solicitação</Th>
        <Th>Status do Termo</Th>
        <Th>Prorrogaçao de periodo</Th>
        <Th>Estagio não Obrigatorio para Obrigatorio</Th>
        <Th>Recisão do termo</Th>
        <Th>Relatorio de estagio supervisionado</Th>
        <Th>Ficha de avaliação do superior imediato</Th>

        </tr>
    </thead>
    <tbody>
        <tr>
        <Td>Não solicitado</Td>
        <Td>Obrigatorio</Td>
        <Td>Renumerado</Td>
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
    <h2>Inicio estágio</h2>
</TextForButtonContainer>
<ButtonsContainer>
        <Button>Solicitar Estágio</Button>
        <Button>Cancelar Solicitação</Button>
        <Button>Enviar Termo do Estágio</Button>
</ButtonsContainer>
<TextForButtonContainer>
    <h2>Durante estágio</h2>
</TextForButtonContainer>
<ButtonsContainer>
        <Button>Enviar Prorrogaçao de periodo </Button>
        <Button>Enviar Estagio não Obrigatorio para Obrigatorio</Button>
        <Button>Enviar Recisão do termo de compromisso de estagio</Button>
</ButtonsContainer>
<TextForButtonContainer>
    <h2>Entregas finais estágio</h2>
</TextForButtonContainer>
<ButtonsContainer>
        <Button>Enviar Relatorio de estagio supervisionado</Button>
        <Button>Enviar Ficha de avaliação do superior imediato</Button>
        <Button>Enviar Finalização do Estagio</Button>
</ButtonsContainer>

</>
);
