import React from 'react';
import './App.css';
import Parallax from './components/Parallax/Parallax.jsx';
import Main from './components/Main/Main.jsx';
import Main_container from '../src/components/Main/Container/MainContainer'

function App() {
  return (
    <div className="App">
      <Parallax />
      <Main>
      </Main>
    </div>
  );
}

export default App;
