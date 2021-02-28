import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from './components/translation/LanguageSelector'

function MyComponent() {
    const { t, i18n } = useTranslation();

    return <h1>{t('title')}</h1>
}

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
    return (
        <Suspense fallback="loading">
            <LanguageSelector />
            <MyComponent />
        </Suspense>
    );
}