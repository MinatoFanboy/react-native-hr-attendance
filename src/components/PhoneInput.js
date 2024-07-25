import React, { memo, useCallback, useEffect, useState } from 'react';
import { Text, TextInput as RnTextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS } from '~/constants';

const PhoneInput = ({ label, onChange, value }) => {
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');

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

    const onChangeText = useCallback(
        (v) => {
            if (v.length < 10) {
                if (v === 'Backspace') {
                    onChange(`${value.slice(0, -1)}`);
                } else {
                    onChange(`${value}${v}`);
                }
            }
        },
        [onChange, value],
    );

    useEffect(() => {
        switch (value.length) {
            case 1:
                setPhoneValue(`(${value[0]}`);
                break;
            case 2:
                setPhoneValue(`(${value[0]}${value[1]}`);
                break;
            case 3:
                setPhoneValue(`(${value[0]}${value[1]}${value[2]})`);
                break;
            case 4:
                setPhoneValue(`(${value[0]}${value[1]}${value[2]}) ${value[3]}`);
                break;
            case 5:
                setPhoneValue(`(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}`);
                break;
            case 6:
                setPhoneValue(`(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}${value[5]}`);
                break;
            case 7:
                setPhoneValue(`(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}${value[5]}-${value[6]}`);
                break;
            case 8:
                setPhoneValue(
                    `(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}${value[5]}-${value[6]}${value[7]}`,
                );
                break;
            case 9:
                setPhoneValue(
                    `(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}${value[5]}-${value[6]}${value[7]}${value[8]}`,
                );
                break;
            case 10:
                setPhoneValue(
                    `(${value[0]}${value[1]}${value[2]}) ${value[3]}${value[4]}${value[5]}-${value[6]}${value[7]}${value[8]}${value[9]}`,
                );
                break;
            default:
                setPhoneValue('');
                break;
        }
    }, [value]);

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
                        cursorColor={COLORS.primary}
                        keyboardType={'numeric'}
                        onBlur={() => setIsFocused(false)}
                        onKeyPress={(e) => onChangeText(e.nativeEvent.key)}
                        onFocus={() => setIsFocused(true)}
                        placeholder={'(888) 888-8888'}
                        style={[FONTS.body1, { color: theme.colors.text }]}
                        placeholderTextColor={COLORS.text}
                        value={phoneValue}
                    />
                </View>
            </View>
        </View>
    );
};

export default memo(PhoneInput);
