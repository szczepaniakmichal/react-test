import React, { useState } from "react";
import { Prompt } from "react-router-dom";

export const ContactPage = () => {
    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
    }

    return (
        <>
            <div className="contact">
                <form onSubmit={handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={value}
                              onChange={handleChangeValue}
                              placeholder="wpisz wiadomość"
                    />
                    <button>Wyślij</button>
                </form>
                <Prompt when={value}
                        message="Wypełniasz formulasz, czy napewno chcesz wyjść? Zmiany zostana utracone"/>
            </div>
        </>
    )
}