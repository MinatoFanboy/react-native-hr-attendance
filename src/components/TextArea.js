import React, { memo, useCallback, useState } from 'react';
import { Text, TextInput as RnTextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS } from '~/constants';

const TextArea = ({ label, onChange, value }) => {
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
        <View style={{ gap: 8 }}>
            <Text style={[FONTS.body2, { color: getColor() }]}>{label}</Text>
            <View
                style={{
                    borderColor: getBorderColor(),
                    borderRadius: 10,
                    borderWidth: 1,
                    gap: 3,
                    paddingHorizontal: 16,
                    paddingVertical: scale(6),
                }}
            >
                <RnTextInput
                    cursorColor={COLORS.primary}
                    multiline
                    numberOfLines={4}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={onChange}
                    onFocus={() => setIsFocused(true)}
                    placeholder={label}
                    style={[
                        FONTS.body1,
                        { color: theme.colors.text, minHeight: scale(20) * 4, textAlignVertical: 'top' },
                    ]}
                    placeholderTextColor={COLORS.text}
                    value={value}
                />
            </View>
        </View>
    );
};

export default memo(TextArea);
