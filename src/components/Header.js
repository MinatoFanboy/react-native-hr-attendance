import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Icon from './Icon';
import { scale } from 'react-native-size-matters';

const Header = ({ containerStyle, header, onPress }) => {
    const theme = useTheme();

    return (
        <View style={[{ flexDirection: 'row' }, containerStyle]}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={{ alignItems: 'center', justifyContent: 'center', height: scale(22), width: scale(22) }}
            >
                <Icon color={theme.colors.text} name={'arrow-left'} size={scale(22)} type={'custom'} />
            </TouchableOpacity>
            <Text
                style={{
                    color: theme.colors.text,
                    flex: 1,
                    fontFamily: 'Lexend-Medium',
                    fontSize: scale(14),
                    textAlign: 'center',
                }}
            >
                {header}
            </Text>
            <View style={{ height: scale(22), width: scale(22) }} />
        </View>
    );
};

export default memo(Header);
