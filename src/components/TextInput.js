import React, { memo, useCallback, useState } from 'react';
import { Text, TextInput as RnTextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import Icon from './Icon';
import { COLORS, FONTS } from '~/constants';

const TextInput = ({ autoCapitalize, icon, keyboardType, label, onChange, placeholder, secureTextEntry, value }) => {
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);

    const getBorderColor = useCallback(() => {
        if (value) {
            return COLORS.primary;
        }
        if (isFocused) {
            return COLORS.primary;
        }
        return COLORS.border;
    }, [isFocused, value]);

    const getColor = useCallback(() => {
        if (value) {
            return COLORS.primary;
        }
        if (isFocused) {
            return COLORS.primary;
        }
        return theme.colors.text;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused, value]);

    return (
        <View
            style={{
                borderColor: getBorderColor(),
                borderRadius: 10,
                borderWidth: 1,
                paddingHorizontal: 16,
                paddingVertical: scale(6),
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 10,
                }}
            >
                <View style={{ flex: 1, gap: 3, paddingBottom: 6 }}>
                    <Text style={[FONTS.body2, { color: getColor() }]}>{label}</Text>
                    <RnTextInput
                        autoCapitalize={autoCapitalize}
                        cursorColor={COLORS.primary}
                        keyboardType={keyboardType}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={onChange}
                        onFocus={() => setIsFocused(true)}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        style={[FONTS.body1, { color: theme.colors.text }]}
                        placeholderTextColor={COLORS.text}
                        value={value}
                    />
                </View>
                {icon && <Icon color={theme.colors.icon} name={icon} size={scale(22)} type={'custom'} />}
            </View>
        </View>
    );
};

export default memo(TextInput);
