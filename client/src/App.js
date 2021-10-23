import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { CatalogProvider } from './context/catalog';
import { UserProvider } from './context/user';

function App() {
  return (
    <CatalogProvider>
      <UserProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </UserProvider>
    </CatalogProvider>
  );
}

export default App;
