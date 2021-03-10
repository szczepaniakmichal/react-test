import React from "react";

export const loginPage = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login">
                    Podaj login
                    <input type="text" id="login"/>
                </label>
                <label htmlFor="password">
                    podaj hasło
                    <input type="password" id="password"/>
                </label>
                <button>Zaloguj</button>
            </form>
        </>
    )
}