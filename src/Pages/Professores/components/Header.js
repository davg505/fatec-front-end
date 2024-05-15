import { HeaderContainer } from "../styles/HeaderContainer";
import { Buttons } from "./Buttons";
import {  MainMenuProfessores } from "./ MainMenuProfessores";
import { TabelaAluno } from "./TabelaAluno";
import {TabelaSolicitacao } from "./TabelaSolicitacao";
import { useState } from "react";


export const Header = () => {
  const [FiltroPesquisa, setFiltroPesquisa] = useState(false);
  const [ListaGeral, setListaGeral] = useState(false);
 // const [StatusSolicitacao, setStatusSolicitacao] = useState(false);

  const handleFiltroPesquisaClick = () => {
    setFiltroPesquisa(prevState => !prevState);
  }; 

    const handleListaGeralClick = () => {
    setListaGeral(prevState => !prevState);
  }; 

  /*  const handleStatusSolicitacaoClick = () => {
    setStatusSolicitacao(prevState => !prevState);
  }; */
  
  // onFiltroPesquisaClick, onListaGeralClick, onStatusSolicitacaoClick

  //<MainMenuProfessores onFiltroPesquisaClick={handleMenuAlunoClick} onListaGeralClick={handleMenuClick} onStatusSolicitacaoClick={handleMenuClick} />
 // {showLogin && <StatusEstagio/>}

   //<Buttons />
  //{FiltroPesquisa && <Buttons />}
 
  return (
    <HeaderContainer>
      <MainMenuProfessores onFiltroPesquisaClick= {handleFiltroPesquisaClick} onListaGeralClick={handleListaGeralClick}/>
      <h1>Area Professor: Estágio Supervisionado</h1>
      <TabelaSolicitacao/>
      {FiltroPesquisa && <Buttons />}
      {ListaGeral && <TabelaAluno/>}
  </HeaderContainer>
    );
  };
