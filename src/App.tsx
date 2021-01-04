import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
