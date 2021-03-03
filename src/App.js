import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import './sass/app.scss'
import { Navigation } from "./layouts/Navigation";
import { Page } from "./layouts/Page";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

export default function App() {
    return (
        <>
            <Router>
                <div className="app">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <aside>
                            <Navigation />
                        </aside>
                        <section className="page">
                            <Page />
                        </section>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </Router>
        </>
    );
}