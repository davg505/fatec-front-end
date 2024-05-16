import { MainMenuContainer } from "../styles/MainMenuContainer";

export const MainMenuProfessores = ({ onFiltroPesquisaClick, onListaGeralClick, onStatusSolicitacaoClick }) => {
return (
        <>
    <MainMenuContainer>
        <ul>
            <li>Home |</li>
            <li onClick={onFiltroPesquisaClick}> Filtros de Pesquisa |</li>
            <li onClick={onListaGeralClick}>Lista geral |</li>
            <li onClick={onStatusSolicitacaoClick}>Solicitações</li>
        </ul>
    </MainMenuContainer>
    </>
    );
    };

