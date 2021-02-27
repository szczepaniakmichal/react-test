import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'

import BtnContainer from './BtnContainer';

// import { AppContext, contextBbj } from "./context/AppContext";
import AppProvider from './context/AppContext';

import './App.css';


const App = () => (
    <div>
        <AppProvider
            //     value={{
            //     url,
            //     toggleUrl
            // }}
        >
            <BtnContainer />
        </AppProvider>
    </div>
)
    // const [url, setUrl] = useState('localhost')
    // const toggleUrl = () => {
    //     setUrl(url === 'localhost' ? 'testbox' : 'localhost')
    // }



export default App;