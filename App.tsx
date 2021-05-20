import React from 'react';
import ThemeProvider from 'ui/themes/ThemeProvider';
import Router from 'ui/router/Router';

export default function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}
