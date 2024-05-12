import React, { useState } from 'react';
import Login from '../../Login/Login';
import LoginProfessor from '../../LoginProfessores/LoginProfessor';
import { Button } from "../styles/Button";
import { ButtonsContainer } from "../styles/ButtonsContainer";

export const Buttons = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLoginProfessor, setShowLoginProfessor] = useState(false);

  const handleAlunoClick = () => {
    setShowLogin(true);
    setShowLoginProfessor(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleProfessorClick = () => {
    setShowLoginProfessor(true);
    setShowLogin(false);
  };

  const handleProfessorCloseLogin = () => {
    setShowLoginProfessor(false);
  };

  return (
    <>
      <ButtonsContainer>
        <Button onClick={handleProfessorClick}>Docente</Button>
        <Button onClick={handleAlunoClick}>Aluno</Button>
        <Button>Empresa</Button>
      </ButtonsContainer>
      {showLogin && <Login onClose={handleCloseLogin} />}
      {showLoginProfessor && <LoginProfessor onClose={handleProfessorCloseLogin} />}
    </>
  );
};