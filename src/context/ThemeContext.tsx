"use client"
import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({});

const getFromLocalStorage = () => {
    if (typeof window === 'undefined') return;
    const theme = localStorage.getItem('theme');
    return theme || 'light';
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >{children}</ThemeContext.Provider>
    )
}