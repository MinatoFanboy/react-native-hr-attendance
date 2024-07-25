import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Button, Icon, PasswordDarkImage, PasswordImage } from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';

const types = [
    { content: 'michael.mitc@exmaple.com', id: 0, title: 'Email' },
    { content: '(217) 555-0113', id: 1, title: 'Phone Number' },
];

const ForgotPassword = ({ navigation }) => {
    const theme = useTheme();

    const [position, setPosition] = useState(0);

    /* Renders */
    const _renderHeader = () => (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{ alignItems: 'center', justifyContent: 'center', height: scale(22), width: scale(22) }}
        >
            <Icon color={theme.colors.text} name={'arrow-left'} size={scale(22)} type={'custom'} />
        </TouchableOpacity>
    );

    /* Title */
    const _renderTitle = () => (
        <View>
            <Text style={[FONTS.h1, { color: theme.colors.text }]}>Forgot password 🤔</Text>
            <Text
                style={[
                    FONTS.body1,
                    {
                        color: COLORS.text,
                        marginTop: 5,
                    },
                ]}
            >
                Select which contact details should we use to reset your password.
            </Text>
        </View>
    );

    const _renderSelection = () => (
        <View style={{ gap: 16, marginTop: 24 }}>
            {types.map((type) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={`${type.id}`}
                    onPress={() => setPosition(type.id)}
                    style={{
                        alignItems: 'center',
                        borderColor: position === type.id ? COLORS.primary : COLORS.border,
                        borderRadius: 16,
                        borderWidth: 1,
                        flexDirection: 'row',
                        gap: 16,
                        paddingHorizontal: 20,
                        paddingVertical: 16,
                    }}
                >
                    {/* Icon */}
                    <View
                        style={{
                            alignItems: 'center',
                            backgroundColor: position === type.id ? COLORS.primary : theme.colors.background1,
                            borderRadius: 10,
                            justifyContent: 'center',
                            height: scale(40),
                            width: scale(40),
                        }}
                    >
                        <Icon
                            color={position === type.id ? 'white' : theme.colors.text}
                            name={'sms-outline'}
                            size={scale(22)}
                            type={'custom'}
                        />
                    </View>

                    {/* Title && Content */}
                    <View style={{ flex: 1 }}>
                        <Text style={[FONTS.h2, { fontSize: scale(15), color: theme.colors.text }]}>{type.title}</Text>
                        <Text style={[FONTS.body1, { color: theme.colors.text }]}>{type.content}</Text>
                    </View>

                    {/* Checkbox */}
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: position === type.id ? COLORS.primary : COLORS.border,
                            borderRadius: scale(22),
                            borderWidth: 2,
                            height: scale(22),
                            width: scale(22),
                        }}
                    >
                        {position === type.id ? (
                            <View
                                style={{
                                    borderRadius: scale(14),
                                    backgroundColor: COLORS.primary,
                                    height: scale(14),
                                    width: scale(14),
                                }}
                            />
                        ) : null}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            {/* Header */}
            {_renderHeader()}

            {/* Scroll */}
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, gap: 30 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 30 }}
            >
                {/* Title */}
                {_renderTitle()}

                {/* Image */}

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {theme.dark ? (
                        <PasswordDarkImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    ) : (
                        <PasswordImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    )}
                </View>

                {/* Selection */}
                {_renderSelection()}

                <Button label={'Continue'} onPress={() => navigation.navigate('Otp')} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPassword;
