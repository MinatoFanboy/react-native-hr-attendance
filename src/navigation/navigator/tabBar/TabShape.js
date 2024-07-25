import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { curveBasis, line } from 'd3-shape';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const TabShape = ({ height }) => {
    const theme = useTheme();
    const lineGenerator = line();

    const rect = lineGenerator([
        [0, 0],
        [width / 2, 0],
        [width, 0],
        [width, height],
        [0, height],
        [0, 0],
    ]);

    const center = lineGenerator.curve(curveBasis)([
        [width / 2 - scale(52) / 2 - 40, 0],
        [width / 2 - scale(52) / 2 - 10, 8],
        [width / 2 - scale(52) / 2 + 5, scale(42)],
        [width / 2 + scale(52) / 2 - 5, scale(42)],
        [width / 2 + scale(52) / 2 + 10, 8],
        [width / 2 + scale(52) / 2 + 40, 0],
    ]);

    const d = `${center} ${rect}`;

    return (
        <Svg height={height} width={width}>
            <Path fill={theme.colors.background} {...{ d }} />
        </Svg>
    );
};

export default TabShape;
