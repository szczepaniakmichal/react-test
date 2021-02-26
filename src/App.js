import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'

import Gallery from "./Gallery";

import { AppContext, contextBbj } from "./context/AppContext";

import './App.css';


const App = () => {
    const [url, setUrl] = useState('localhost')
    const toggleUrl = () => {
        setUrl(url === 'localhost' ? 'testbox' : 'localhost')
    }

    return (
      <AppContext.Provider value={{
          url,
          toggleUrl
      }}>
      <Gallery />
      </AppContext.Provider>
    )
}


export default App;