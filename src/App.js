import React, { Suspense } from 'react';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
    return (
       <div>route</div>
    );
}