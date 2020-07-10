import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
        <h1>Witaj w aplikacji testowej</h1>

        <FontAwesomeIcon icon={faStar} />

    </div>
  );
}

export default App;
