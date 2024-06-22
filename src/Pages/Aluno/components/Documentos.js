import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";
import { TextForButtonContainer } from "../styles/TextForButtonContainer";


export const Documentos = () => {

    const handleTermoCNORClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_A_-_Estágio_não_obrigatório_remunerado.docx', '_blank');
    };

    const handleTermoCORClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_B__Termo_de_Compromisso_de_Estágio_Obrigatório_Remunerado_-com_informações_Fatec_Campinas.docx', '_blank');
    };

    const handleTermoCORNClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_C__Termo_de_Compromisso_de_Estágio_Obrigatório_não_Remunerado-com_informações_Fatec_Campinas.docx', '_blank');
    };

    const handleTermoProrrogacaoClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_6-1_-_TERMO_ADITIVO_-_PRORROGAÇÃO_DE_PERÍODO.docx', '_blank');
    };

    const handleTermoEstagioObrigatorioClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_6-2_-_TERMO_ADITIVO_-_ESTÁGIO_NÃO_OBRIGATÓRIO_PARA_OBRIGATÓRIO.docx', '_blank');
    };

    const handleRescisaoTermoClick = () => {
        window.open(process.env.PUBLIC_URL + '/ANEXO_6-3_-_RESCISÃO_DE_TERMO_DE_COMPROMISSO_DE_ESTÁGIO.docx', '_blank');
    };

    const handleRelatorioEstagioClick = () => {
        window.open(process.env.PUBLIC_URL + '/RELATÓRIO_DE_ESTÁGIO_SUPERVISIONADO.docx', '_blank');
    };

    const handleAvaliacaoClick = () => {
        window.open(process.env.PUBLIC_URL + '/FICHA_DE_AVALIAÇÃO_DO_SUPERIOR_IMEDIATO.docx', '_blank');
    };

    return (
        <>
            <TextForButtonContainer>
                <h2>Documentos do Estágio para Download</h2>
            </TextForButtonContainer>
            <TextForButtonContainer>
                <h2>Estágio</h2>
            </TextForButtonContainer>
            <ButtonsContainer>
                <Button onClick={handleTermoCNORClick}>Termo de compromisso não obrigatório remunerado</Button>
                <Button onClick={handleTermoCORClick}>Termo de compromisso obrigatório remunerado</Button>
                <Button onClick={handleTermoCORNClick}>Termo de compromisso obrigatório não remunerado</Button>
                <Button onClick={handleTermoProrrogacaoClick}>Termo aditivo - prorrogação de período</Button>
                <Button onClick={handleTermoEstagioObrigatorioClick}>Termo aditivo - estágio não obrigatório para obrigatório</Button>
                <Button onClick={handleRescisaoTermoClick}>Rescisão de termo de compromisso de estágio</Button>
                <Button onClick={handleRelatorioEstagioClick}>Relatório de estágio supervisionado</Button>
                <Button onClick={handleAvaliacaoClick}>Ficha de avaliação do superior imediato</Button>
            </ButtonsContainer>
            <TextForButtonContainer>
                <h2>Iniciação científica - IC</h2>
            </TextForButtonContainer>
            <ButtonsContainer>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/2-Carta_de_avaliação_do_orientador.doc', '_blank')}>Carta de apresentação do orientador</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/Manual_de_IC_-_verso_final.pdf', '_blank')}>Projeto de iniciação científica</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/1-_REQUERIMENTO_DE_EQUIVALÊNCIA.docx', '_blank')}>Requerimento de equivalência - iniciação científica</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/4-Modelo_de_relatório_final_para_iniciação_científica.docx', '_blank')}>Relatório equivalência ic para estágio supervisionado</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/3-Carta_de_validação_da_Iniciação_Científica.docx', '_blank')}>Carta de avaliação de desempenho do aluno de iniciação científica</Button>
            </ButtonsContainer>
            <TextForButtonContainer>
                <h2>Equivalência profissional</h2>
            </TextForButtonContainer>
            <ButtonsContainer>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/ec/REQUERIMENTO_DE_EQUIVALÊNCIA_DE_ATIVIDADE_PROFISSIONAL_NA_ÁREA_DO_CURSO.docx', '_blank')}>Requerimento de equivalência de atividade profissional na área do curso</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/ec/RELATÓRIO_EQUIVALENCIA_DE_ATIVIDADE_PROFISSIONAL.docx', '_blank')}>Requerimento de equivalência de atividade profissional</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/ec/DESCRIÇÃO_ATIVIDADES_PROFISSIONAIS.docx', '_blank')}>Descrição de atividades profissionais para equivalência de estágio supervisionado</Button>
                <Button onClick={() => window.open(process.env.PUBLIC_URL + '/ec/3-MODELO_DA_CARTA_DE_VÍNCULO_EMPREGATÍCIO.docx', '_blank')}>Comprovante de vínculo empregatício</Button>
            </ButtonsContainer>
        </>
    );
};
