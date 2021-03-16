import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import './sass/app.scss'
import { Navigation } from "./layouts/Navigation";
import { Page } from "./layouts/Page";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

export default function App() {
    const [meter, setMeter] = useState(0);
    const [pallet, setPallet] = useState(0);

    const changeMeterToPallet = (e) => {
        const nameClassUp = e.target.classList.contains('up');
        const nameClassDown = e.target.classList.contains('down');
        const value = Number(e.target.parentElement.querySelector('input').value);

        console.log("nameClassup", nameClassUp)
        console.log("nameClassdown", nameClassDown)
        console.log("e add", e);
        console.log("e increment", e.target.incremental);
        console.log("e value", e.target.value);

        if (nameClassUp) {
            setMeter(value + 1);
            setPallet(Math.ceil((value + 1) / 60));
        }
        if (nameClassDown) {
            if (value <= 0) return;
            setMeter(value - 1);
            setPallet(Math.ceil((value - 1) / 60));
        }

        if (e.target.localName === 'input') {
            if (e.target.value > meter) {
                setMeter(value);
                setPallet(Math.ceil((value) / 60));
            }

            if (e.target.value <= meter) {
                // if (value < 0) return;
                setMeter(value);
                setPallet(Math.ceil((value) / 60));
            }
        }
    }

    const changePalletToMeter = (e) => {
        const nameClassUp = e.target.classList.contains('up');
        const nameClassDown = e.target.classList.contains('down');
        const value = Number(e.target.parentElement.querySelector('input').value);

        console.log("nameClassup", nameClassUp)
        console.log("nameClassdown", nameClassDown)
        console.log("e add", e);
        console.log("e increment", e.target.incremental);
        console.log("e value", e.target.value);

        if (nameClassUp) {
            setMeter((value + 1) * 60);
            setPallet(value + 1);
        }
        if (nameClassDown) {
            if (value <= 0) return;
            setMeter((value - 1) * 60);
            setPallet(value - 1);
        }

        if (e.target.localName === 'input') {
            if (e.target.value > pallet) {
                setMeter(value * 60);
                setPallet(value);
            }

            if (e.target.value <= pallet) {
                setMeter(value * 60);
                setPallet(value);
            }
        }
    }

    const subMeterToPallets = (e) => {
        console.log("e sub", e)
    }

    const handleHideElement = (e) => {
        if (
            e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.contains(
                'hidden'
            )
        ) {
            e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.remove(
                'hidden'
            );
            e.target.parentNode.parentNode.childNodes[1].childNodes[2].classList.add(
                'hidden'
            );
            e.target.textContent = 'Rabat końcowy';
            // console.log(e.target.innerHtml);
        } else {
            e.target.parentNode.parentNode.childNodes[1].childNodes[2].classList.remove(
                'hidden'
            );
            e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.add(
                'hidden'
            );
            e.target.textContent = 'Cena końcowa';
        }
    }

    return (
        <>
            <ul>
                <li>
                    <div className="group-name-wrapper">
                        <p>
                            {"Firerock"} {"30"}
                        </p>
                        <button
                        >
                            Rabat końcowy
                        </button>
                    </div>
                    <div className="counters-wrapper">
                        <div className="counter-wrapper">
                            <label>Liczba produktów: 444 metry</label>
                            <div className="counter-input-wrapper meter">
                                <div className="number-wrapper">
                                    <span className="up arrow-up"
                                          onClick={(e) => changeMeterToPallet(e)}
                                    />
                                    <input
                                        min="0"
                                        value={meter}
                                        // value={state.meter}
                                        type="number"
                                        name="meterUp"
                                        onChange={(e) => {
                                            console.log("zmiana metrów")
                                            changeMeterToPallet(e)
                                        }
                                        }
                                    />
                                    <span className="down arrow-down"
                                          onClick={(e) => changeMeterToPallet(e)}
                                    />

                                </div>
                                <div className="counter-name-wrapper">
                                    {/*<span>{material.productVolume}</span>*/}
                                    <span>m<sup>2</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className="counter-wrapper">
                            <label>Liczba produktów: 333 palety</label>
                            <div className="counter-input-wrapper pallet">
                                <div className="number-wrapper">
            <span className="up"
                  onClick={(e) => changePalletToMeter(e)}
            />
                                    <input
                                        min="0"
                                        value={pallet}
                                        // value={state.pallet}
                                        type="number"
                                        onChange={(e) => {
                                            console.log("zmiana palety")
                                            changePalletToMeter(e)
                                        }
                                        }
                                    />
                                    <span className="down"
                                          onClick={(e) => changePalletToMeter(e)}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </>
    );
}