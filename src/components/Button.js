import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { COLORS } from '~/constants';
import Icon from './Icon';

const Button = ({ containerStyle, disabled, icon, label, onPress, labelStyle }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={disabled}
            onPress={onPress}
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: disabled ? COLORS.text : COLORS.primary,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 16,
                    height: scale(46),
                },
                containerStyle,
            ]}
        >
            {icon && <Icon color={'white'} name={icon} size={scale(20)} type={'custom'} />}
            <Text
                style={[
                    {
                        color: disabled ? theme.colors.background : 'white',
                        fontFamily: 'Lexend-Light',
                        fontSize: scale(15),
                    },
                    labelStyle,
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default memo(Button);
