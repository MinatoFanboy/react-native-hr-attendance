import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

import Icon from './Icon';

const IconButton = ({ color, icon, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{ alignItems: 'center', justifyContent: 'center', height: scale(22), width: scale(22) }}
        >
            <Icon color={color} name={icon} size={scale(22)} type={'custom'} />
        </TouchableOpacity>
    );
};

export default memo(IconButton);
