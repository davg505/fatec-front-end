import { useState } from "react";
import { HeaderContainer } from "../styles/HeaderContainer";
import { Buttons } from "./Buttons";
import { Documentos } from "./Documentos";
import { IformacaoEstagioAluno } from "./IformacaoEstagioAluno";
import { MainMenuAluno } from "./MainMenuAluno";
import { StatusEquivalenciaProfissional } from "./StatusEquivalenciaProfissional";
import { StatusEstagio } from "./StatusEstagio";
import { StatusIniciacaoCientifica } from "./StatusIniciacaoCientifica";
import { TabelaAluno } from "./TabelaAluno";
import { TextForButton } from "./TextForButton";


export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showStatusEq, setShowStatusEq] = useState(false);
  const [showIniCien, setShowIniCien] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModalidadeEstagio, setShowModalidadeEstagio] = useState(false);

  const handleIniCienClick = () => {
    setShowIniCien(prevState => !prevState);
  };

  const handleEstagioClick = () => {
    setShowLogin(prevState => !prevState);
  };

  const handleEquiClick = () => {
    setShowStatusEq(prevState => !prevState);
  };
  
  const handleMenuAlunoClick = () => {
    setShowMenu(prevState => !prevState);
  };

  const handleMenuClick = () => {
    setShowModalidadeEstagio(prevState => !prevState);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  
  return (
    <HeaderContainer>
      <MainMenuAluno onMenuClick={handleMenuAlunoClick} onModalidadeClick={handleMenuClick}/>
      <h1>Área Aluno: Estágio Supervisionado</h1>
      {showModalidadeEstagio && <TextForButton/> && <Buttons onEstagioClick={handleEstagioClick} OnEquivalenciaClick={handleEquiClick} onCientificaClick={handleIniCienClick}/>}
      <TabelaAluno/>
      <IformacaoEstagioAluno/>
      {showIniCien && <StatusIniciacaoCientifica/>}
      {showStatusEq && <StatusEquivalenciaProfissional/>}
      {showLogin && <StatusEstagio/>}
      {showMenu &&  <Documentos/>}
    </HeaderContainer>
  );
};
