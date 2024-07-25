import React, { memo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS } from '~/constants';
import Icon from './Icon';

const CheckBox = memo(({ color, item }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12, marginTop: 12 }}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setIsChecked((prev) => !prev)}>
                <Icon
                    color={isChecked ? COLORS.primary : COLORS.text}
                    name={isChecked ? 'tick-square' : 'square'}
                    size={scale(22)}
                    type={'custom'}
                />
            </TouchableOpacity>
            <Text style={[FONTS.body1, { color, flex: 1 }]}>{item}</Text>
        </View>
    );
});

const CheckBoxList = ({ array, title }) => {
    const theme = useTheme();

    return (
        <View style={{ gap: 4 }}>
            <Text style={[FONTS.body1, { fontFamily: 'Lexend-Medium', color: theme.colors.text }]}>{title}</Text>
            <View>
                {array.map((item, index) => (
                    <CheckBox color={theme.colors.text} key={`Checkbox-${index}`} item={item} />
                ))}
            </View>
        </View>
    );
};

export default memo(CheckBoxList);
