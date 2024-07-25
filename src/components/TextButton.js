import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '~/constants';

const TextButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Text
                style={[
                    FONTS.body1,
                    {
                        color: COLORS.primary,
                    },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default memo(TextButton);
