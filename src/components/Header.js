import { HeaderContainer } from "../styles/HeaderContainer";
import { Buttons } from "./Buttons";
import { ButtonsDocuments } from "./ButtonsDocuments";
import { Documents } from "./Documents";
import { MainMenu } from "./MainMenu";
import { TextForButton } from "./TextForButton";

export const Header = () => (
    <HeaderContainer>
      <h1>Estágio</h1>
      <MainMenu />
      <TextForButton/>
      <Buttons/>
      <Documents/>
      <ButtonsDocuments/>
      
  </HeaderContainer>
  );
  
