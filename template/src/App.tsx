import React from 'react';
import logo from './assets/logo.svg';
import { Counter } from './pages/counter/Counter';

import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
