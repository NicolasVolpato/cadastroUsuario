import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function UserForm() {
  const [user, setUser] = useState({ nome: '', email: '', telefone: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    setUser({ nome: '', email: '', telefone: '' });
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nome" name="nome" value={user.nome} onChange={handleChange} required />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} required />
      <TextField label="Telefone" name="telefone" value={user.telefone} onChange={handleChange} required />
      <Button variant="contained" type="submit">Cadastrar</Button>
    </Box>
  );
}

export default UserForm;
