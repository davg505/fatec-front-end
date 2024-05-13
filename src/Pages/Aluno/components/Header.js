import { useState } from "react";
import { HeaderContainer } from "../styles/HeaderContainer";
import { Buttons } from "./Buttons";
import { Documentos } from "./Documentos";
import { IformacaoEstagioAluno } from "./IformacaoEstagioAluno";
import { MainMenuAluno } from "./MainMenuAluno";
import { StatusEstagio } from "./StatusEstagio";
import { TabelaAluno } from "./TabelaAluno";
import { TextForButton } from "./TextForButton";


export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleEstagioClick = () => {
    setShowLogin(prevState => !prevState);
  };
  
  const handleMenuAlunoClick = () => {
    setShowMenu(prevState => !prevState);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  
  return (
    <HeaderContainer>
      <MainMenuAluno onMenuClick={handleMenuAlunoClick}/>
      <h1>Área Aluno: Estágio Supervisionado</h1>
      <TextForButton/>
      <Buttons onEstagioClick={handleEstagioClick} />
      <TabelaAluno/>
      <IformacaoEstagioAluno/>
      {showLogin && <StatusEstagio/>}
      {showMenu &&  <Documentos/>}
    </HeaderContainer>
  );
};
