import React, { useState } from 'react';
import { Aba, AbasContainer } from '../styles/AbasContainer';
import { SolicitacoesCanceladas } from "./SolicitacoesCanceladas";
import { SolicitacoesConcluidas } from "./SolicitacoesConcluidas";
import { TabelaPedidos } from "./TabelaPedidos";
import { TabelaSolicitacaoEmAndamento } from "./TabelaSolicitacaoEmAndamento";


export const AbasDasSolicitacoes = () => {
    const [abaAtiva, setAbaAtiva] = useState(null);

    const handleAbaClick = (aba) => {
        if (abaAtiva === aba) {
            // Se a aba clicada for a mesma que a aba ativa, desativa a aba
            setAbaAtiva(null);
        } else {
            // Caso contrário, ativa a aba clicada
            setAbaAtiva(aba);
        }
    };

    return (
        <AbasContainer>
            
            <h3>Acesso as solicitações</h3>
            <Aba
                className={abaAtiva === 'Pedidos de solicitações' ? 'aba-ativa' : 'aba'}
                onClick={() => handleAbaClick('Pedidos de solicitações')}
            >
                <h3>Pedidos de solicitações - Total: 5 solicitações   </h3>
            </Aba>
            {abaAtiva === 'Pedidos de solicitações' && <TabelaPedidos />} {/* Renderiza a tabela quando a aba 'Pedidos de solicitações' estiver ativa */}
            {/* Adicione as outras abas aqui */}
            <Aba
                className={abaAtiva === 'Solicitações em andamento' ? 'aba-ativa' : 'aba'}
                onClick={() => handleAbaClick('Solicitações em andamento')}
            >
                <h3>Solicitações em andamento - Total: 15 solicitações</h3>
            </Aba>
            {abaAtiva === 'Solicitações em andamento' && <TabelaSolicitacaoEmAndamento />} {/* Renderiza a tabela quando a aba 'Pedidos de solicitações' estiver ativa */}
            <Aba
                className={abaAtiva === 'Solicitações Canceladas' ? 'aba-ativa' : 'aba'}
                onClick={() => handleAbaClick('Solicitações Canceladas')}
            >
                <h3>Solicitações Canceladas - Total: 1 solicitações</h3>
            </Aba>
            {abaAtiva === 'Solicitações Canceladas' && <SolicitacoesCanceladas />} {/* Renderiza a tabela quando a aba 'Pedidos de solicitações' estiver ativa */}
            <Aba
                className={abaAtiva === 'Solicitações Concluidas' ? 'aba-ativa' : 'aba'}
                onClick={() => handleAbaClick('Solicitações Concluidas')}
            >
                <h3>Solicitações Concluidas - Total: 2 solicitações</h3>
            </Aba>
            {abaAtiva === 'Solicitações Concluidas' && <SolicitacoesConcluidas />} {/* Renderiza a tabela quando a aba 'Pedidos de solicitações' estiver ativa */}
        </AbasContainer>
    );
};


