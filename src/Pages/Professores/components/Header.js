import { HeaderContainer } from "../styles/HeaderContainer";
import { Buttons } from "./Buttons";
import { MainMenu } from "./MainMenu";
import { TabelaAluno } from "./TabelaAluno";
import { TextForButton } from "./TextForButton";

export const Header = () => (
  
    <HeaderContainer>
      <h1>Area Professor: Estágio Supervisionado</h1>
      <MainMenu />
      <TextForButton/>
      <Buttons />
      <TabelaAluno/>

      
  </HeaderContainer>
  );
  
