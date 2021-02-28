import React from "react";
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    console.log("i18n", i18n)

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="pl" name="language" defaultChecked/> PL
            <input type="radio" value="en" name="language" /> EN
            <input type="radio" value="de" name="language" /> DE
        </div>
    )
}