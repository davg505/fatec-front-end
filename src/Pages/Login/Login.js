import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use o useNavigate para navegação

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para autenticar o usuário
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'aluno@fatec.br' && password === 'aluno') {
      // Redirecione para a rota '/alunos' se forem corretos
      navigate('/alunos');
    } else {
      alert('Usuário ou senha inválidos');
    }
    
  };

  return (
    <div className="login-container">
      <h2>Login Aluno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
