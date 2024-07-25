import React, { memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import Icon from './Icon';
import { COLORS, FONTS } from '~/constants';
import { format } from 'date-fns';

const DatePicker = ({ label, onChange, value }) => {
    const theme = useTheme();

    const getBorderColor = useCallback(() => {
        if (value) {
            return COLORS.primary;
        }
        return COLORS.border;
    }, [value]);

    const getColor = useCallback(() => {
        if (value) {
            return COLORS.primary;
        }
        return theme.colors.text;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{
                alignItems: 'center',
                borderColor: getBorderColor(),
                borderRadius: 10,
                borderWidth: 1,
                flexDirection: 'row',
                gap: 10,
                paddingHorizontal: 16,
                paddingVertical: scale(6),
            }}
        >
            <View style={{ flex: 1, gap: 3, paddingBottom: 6 }}>
                <Text style={[FONTS.body2, { color: getColor() }]}>{label}</Text>
                <Text style={[FONTS.body1, { color: value ? theme.colors.text : COLORS.text }]}>
                    {value ? format(value, 'MMM dd, yyyy') : ''}
                </Text>
            </View>
            <Icon color={theme.colors.icon} name={'calendar-outline'} size={scale(22)} type={'custom'} />
        </TouchableOpacity>
    );
};

export default memo(DatePicker);
