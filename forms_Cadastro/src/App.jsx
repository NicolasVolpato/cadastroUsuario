import React, { useState } from 'react';
import { Container, AppBar, Tabs, Tab, Box } from '@mui/material';
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static" sx={{ mb: 2 }}>
        <Tabs value={tabIndex} onChange={handleChange} centered>
          <Tab label="Cadastro de Usuários" />
          <Tab label="Usuários Cadastrados" />
        </Tabs>
      </AppBar>

      <Box>
        <Box sx={{ display: tabIndex === 0 ? 'block' : 'none' }}>
          <RegisterPage />
        </Box>
        <Box sx={{ display: tabIndex === 1 ? 'block' : 'none' }}>
          <UsersPage />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
