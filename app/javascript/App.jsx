import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routes from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
