import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { scale } from 'react-native-size-matters';

import { Button, Icon, OtpDarkImage, OtpImage, TextButton } from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';

const Otp = ({ navigation }) => {
    const theme = useTheme();

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        let interval = setInterval(
            () =>
                setTimer((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        return prev;
                    }
                }),
            1000,
        );

        return () => {
            clearInterval(interval);
        };
    }, []);

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
            <Text style={[FONTS.h1, { color: theme.colors.text }]}>Enter Verification Code</Text>
            <Text
                style={[
                    FONTS.body1,
                    {
                        color: COLORS.text,
                        marginTop: 5,
                    },
                ]}
            >
                We have sent the code verification to your mobile number
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            {/* Header */}
            {_renderHeader()}

            {/* Scroll */}
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 30 }}
            >
                {/* Title */}
                {_renderTitle()}

                {/* Image */}
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    {theme.dark ? (
                        <OtpDarkImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    ) : (
                        <OtpImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    )}
                </View>

                <OTPInputView
                    autoFocusOnLoad
                    codeInputFieldStyle={[
                        FONTS.h2,
                        {
                            color: theme.colors.text,
                            borderColor: theme.colors.border,
                            borderRadius: 12,
                            borderWidth: 1,
                            height: scale(65),
                            width: scale(65),
                        },
                    ]}
                    onCodeFilled={(code) => console.log(code)}
                    pinCount={4}
                    style={{ height: scale(65), marginTop: 40, width: '100%' }}
                />

                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap: 4,
                        marginTop: 20,
                    }}
                >
                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>00:{`${timer}`.padStart(2, '0')}</Text>
                    <TextButton onPress={() => setTimer(30)} title={'Resend it'} />
                </View>

                <Button
                    containerStyle={{ marginTop: 50 }}
                    label={'Verify'}
                    onPress={() => navigation.navigate('ResetPassword')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Otp;
