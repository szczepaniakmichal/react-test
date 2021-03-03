import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import { Home } from './components/route/home'
import { MyProject } from "./components/route/myProject";
import { Contact } from "./components/route/contact";
import { Error } from "./components/route/error";

import './App.css';

export default function App() {
    return (
        <>
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/" exact >strona glowna</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-project">moje projekty</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">kontakt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/my-project" component={MyProject}/>
                            <Route path="/contact" component={Contact}/>
                            <Route component={Error}/>
                        </Switch>

                    </section>
                </div>
            </Router>
        </>
    );
}