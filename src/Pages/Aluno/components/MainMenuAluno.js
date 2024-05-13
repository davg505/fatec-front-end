import React from 'react';
import { MainMenuContainer } from "../styles/MainMenuContainer";


export const MainMenuAluno = ({ onMenuClick }) => {

return (
    <>
    <MainMenuContainer>
        <ul>
            <li>Home</li>
            <li onClick={onMenuClick}>Documento</li>
        </ul>
    </MainMenuContainer>
    </>
);
};