import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');

const COLORS = {
    background: '#EDF4FF',
    border: '#EEEFF0',
    danger: '#FF7F74',
    primary: '#3085FE',
    success: '#30BEB6',
    text: '#ACAFB5',
};

const SIZES = {
    height,
    width,
};

const FONTS = {
    h1: { fontFamily: 'Lexend-Medium', fontSize: scale(26), lineHeight: scale(35) },
    h2: { fontFamily: 'Lexend-Medium', fontSize: scale(17) },
    h3: { fontFamily: 'Lexend-Medium', fontSize: scale(15) },
    h4: { fontFamily: 'Lexend-Medium', fontSize: scale(14) },
    body1: { fontFamily: 'Lexend-Light', fontSize: scale(13), lineHeight: scale(20) },
    body2: { fontFamily: 'Lexend-Light', fontSize: scale(11) },
};

export { COLORS, FONTS, SIZES };
