import React from 'react';
import './Help.css'; // Arquivo CSS para estilizar a tela de ajuda
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';
import HelpMenu from '../../components/helpMenu/helpMenu'; // Importação do menu de ajuda

const Ajuda: React.FC = () => {
    return (
        <>
            <div className="side">
                <Sidebar />
            </div>

            <div className="help-container">
                <Link to="/">
                    
                </Link>
                <h1>Centro de Ajuda</h1>
                <p>Bem-vindo ao nosso centro de ajuda! Aqui você encontrará respostas para as dúvidas mais comuns.</p>

                {/* Adicionando o HelpMenu aqui */}
                <HelpMenu />
            </div>
        </>
    );
}

export default Ajuda;

