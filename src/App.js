import React from 'react';
import { Provider } from "react-redux";
// import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import store from "./store/store";
// import Form from "./Form";
import FormConsumer from "./Form";
// import List from "./List"
import ListConsumer from "./List"

import './App.css';
import './sass/app.scss'

export default function App() {
    return (
        <Provider store={store}>
            <FormConsumer />
            <p>Programowanie :)</p>
            <ListConsumer />
        </Provider>
    );
}