import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import { Home } from './components/route/home'
import { MyProject } from "./components/route/myProject";
import { Contact } from "./components/route/contact";

import './App.css';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
    return (
        <>
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/" exact activeClassName="home-page">strona glowna</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-project" activeClassName="my-project-page">moje projekty</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" activeClassName="contact-page">kontakt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Route path="/" exact component={Home}/>
                        <Route path="/my-project" component={MyProject}/>
                        <Route path="/contact" component={Contact}/>
                    </section>
                </div>
            </Router>
        </>
    );
}