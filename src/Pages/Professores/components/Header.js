import { useState } from "react";
import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenuProfessores } from "./ MainMenuProfessores";
import { AbasDasSolicitacoes } from "./AbasDasSolicitacoes";
import { Buttons } from "./Buttons";
import { TabelaAluno } from "./TabelaAluno";
import { TabelaSolicitacao } from "./TabelaSolicitacao";
import { TabelaSolicitacaoEP } from "./TabelaSolicitacaoEP";
import { TabelaSolicitacaoEstagio } from "./TabelaSolicitacaoEstagio";
import { TabelaSolicitacaoIC } from "./TabelaSolicitacaoIC";


export const Header = () => {
  const [FiltroPesquisa, setFiltroPesquisa] = useState(false);
  const [ListaGeral, setListaGeral] = useState(false);
  const [SolicitacaoGeral, setSolicitacaoGeral] = useState(false);

  const handleFiltroPesquisaClick = () => {
    setFiltroPesquisa(prevState => !prevState);
  }; 

    const handleListaGeralClick = () => {
    setListaGeral(prevState => !prevState);
  }; 

  const handleSolicitacaoClick = () => {
    setSolicitacaoGeral(prevState => !prevState);
  }; 

  return (
    <HeaderContainer>
      <MainMenuProfessores onFiltroPesquisaClick= {handleFiltroPesquisaClick} onListaGeralClick={handleListaGeralClick} onStatusSolicitacaoClick={handleSolicitacaoClick}/>
      <h1>Area Professor: Estágio Supervisionado</h1>
      <TabelaSolicitacao/>
      <TabelaSolicitacaoEstagio/>
      <TabelaSolicitacaoIC/>
      <TabelaSolicitacaoEP/>
      {FiltroPesquisa && <Buttons />}
      {SolicitacaoGeral && <AbasDasSolicitacoes/>}
      {ListaGeral && <TabelaAluno/>}
  </HeaderContainer>
    );
  };
