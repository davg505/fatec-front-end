import styled from 'styled-components';

export const AbasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    
`;

export const Aba = styled.div`
    background-color: grey;
    color: black;
    padding: 10px 20px;
    margin-right: 8px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 8px;
    width: 500px; /* Defina o tamanho desejado */
    text-align: center; /* Centralize o texto */
    &:hover {
        background-color: #333;
    }
`;

