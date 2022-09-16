import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/header';
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
    </ThemeProvider>
  );
}

export default App;
