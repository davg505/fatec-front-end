import React from 'react';
import { MainMenuContainer } from "../styles/MainMenuContainer";


export const MainMenuAluno = ({ onMenuClick, onModalidadeClick }) => {

return (
    <>
    <MainMenuContainer>
        <ul>
            <li>Home |</li>
            <li onClick={onMenuClick}>Documentos |</li>
            <li onClick={onModalidadeClick}>Modalidades</li>
        </ul>
    </MainMenuContainer>
    </>
);
};