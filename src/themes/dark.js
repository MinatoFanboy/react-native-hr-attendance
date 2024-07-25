import { DarkTheme } from '@react-navigation/native';

const dark = {
    dark: false,
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#000000',
        background1: '#2F3235',
        border: '#272A2E',
        border1: '#272A2E',
        card: '#181B1F',
        card1: '#101317',
        dangerTransparent: '#1C181C',
        icon: '#FFFFFF',
        gray: '#181B1F',
        greenTransparent: '#171D19',
        primaryTransparent: '#121923',
        successTransparent: '#192327',
        text: '#FFFFFF',
    },
};

export default dark;
