import { TextForButtonContainer } from "../styles/TextForButtonContainer";


export const TextForButton = ({ onModalidadeClick }) => {

  return (
    <TextForButtonContainer>
      <h2 onClick={onModalidadeClick}>Selecionar tipo de modalidade de estagio</h2>
    </TextForButtonContainer>
  )
};

