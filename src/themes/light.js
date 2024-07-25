import { DefaultTheme } from '@react-navigation/native';

const light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        background1: '#E7E7E8',
        border: '#FFFFFF',
        border1: '#F7F7F8',
        card: '#FFFFFF',
        card1: '#FFFFFF',
        dangerTransparent: '#FFF9F8',
        icon: '#292D32',
        gray: '#FBFBFB',
        greenTransparent: '#FAFDF5',
        primaryTransparent: '#F5F9FF',
        successTransparent: '#F5FCFB',
        text: '#101317',
    },
};

export default light;
