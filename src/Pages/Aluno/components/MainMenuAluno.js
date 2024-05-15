import React from 'react';
import { MainMenuContainer } from "../styles/MainMenuContainer";


export const MainMenuAluno = ({ onMenuClick, onModalidadeClick }) => {

return (
    <>
    <MainMenuContainer>
        <ul>
            <li>Home |</li>
            <li onClick={onMenuClick}>Documento |</li>
            <li onClick={onModalidadeClick}>Modalidade de estagio</li>
        </ul>
    </MainMenuContainer>
    </>
);
};