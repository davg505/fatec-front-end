import React, { useState } from 'react';
import { Button } from "../styles/Button";
import { TabelaSolicitacaoContainer, Table, Td, Th, } from "../styles/TableContainer";

export const SolicitacoesConcluidas = () => {
  const [alunos] = useState([...Array(2)].map((_, index) => {
    const options = ["Estágio", "Equivalência Profissional", "Iniciação Científica"];
    return {
      nome: `Aluno ${index + 1}`,
      email: `aluno${index + 1}@email.com`,
      ra: '123456',
      curso: `Curso ${index % 3 + 1}`,
      semestre: index % 2 + 1,
      dataInicial: '2022-01-01',
      dataFinal: '2022-06-30',
      ano: '2022',
      modalidade: options[Math.floor(Math.random() * options.length)]
    };
  }));

  const [modalidadeFiltro, setModalidadeFiltro] = useState(null);

  const handleAprovadoClick = (index) => {
    // Lógica para marcar o aluno como aprovado
  };

  const handleReprovadoClick = (index) => {
    // Lógica para marcar o aluno como reprovado
  };

  const handleEnviarDiretorClick = (index) => {
    // Lógica para marcar o aluno como reprovado
  };

  const filteredAlunos = modalidadeFiltro ? alunos.filter(aluno => aluno.modalidade === modalidadeFiltro) : alunos;

  return (
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
            <Th>Modalidades</Th>
            <Th><Button onClick={() => setModalidadeFiltro("Estágio")}>Estágio</Button></Th>
            <Th><Button onClick={() => setModalidadeFiltro("Equivalência Profissional")}>Equivalência Profissional</Button></Th>
            <Th><Button onClick={() => setModalidadeFiltro("Iniciação Científica")}>Iniciação Científica</Button></Th>
            <Th><Button onClick={() => setModalidadeFiltro(null)}>Mostrar Todos</Button></Th>
          </tr>
        </thead>
        <tbody>
          {filteredAlunos.map((aluno, index) => (
            <tr key={index}>
              <Td>{aluno.nome}</Td>
              <Td>{aluno.email}</Td>
              <Td>{aluno.ra}</Td>
              <Td>{aluno.curso}</Td>
              <Td>{aluno.semestre}</Td>
              <Td>{aluno.dataInicial}</Td>
              <Td>{aluno.dataFinal}</Td>
              <Td>{aluno.ano}</Td>
              <Td>{aluno.modalidade}</Td>
              <Td>
                <Button onClick={() => handleEnviarDiretorClick(index)}>Documentos</Button>
              </Td>
              <Td>
                <Button onClick={() => handleEnviarDiretorClick(index)}>Dados Modalidade</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TabelaSolicitacaoContainer>
  );
};


