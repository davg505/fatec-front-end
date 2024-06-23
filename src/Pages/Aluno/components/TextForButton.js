import { TextForButtonContainer } from "../styles/TextForButtonContainer";


export const TextForButton = ({ onModalidadeClick }) => {

  return (
    <TextForButtonContainer>
      <h2 onClick={onModalidadeClick}>Selecionar tipo de modalidade</h2>
    </TextForButtonContainer>
  )
};

