import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

import lightTheme from './light';
import darkTheme from './dark';

const defaultMode = Appearance.getColorScheme();

const ThemeContext = createContext({
    mode: defaultMode,
    setMode: (mode) => {},
});

const useThemeContext = () => useContext(ThemeContext);

const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode);
    const setMode = (mode) => {
        setThemeState(mode);
    };

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeState(colorScheme);
        });
        return () => subscription.remove();
    }, []);

    return <ThemeContext.Provider value={{ mode: themeState, setMode }}>{children}</ThemeContext.Provider>;
};

const ThemeManager = ({ children }) => <ManageThemeProvider>{children}</ManageThemeProvider>;

export { useThemeContext, lightTheme, darkTheme };

export default ThemeManager;
