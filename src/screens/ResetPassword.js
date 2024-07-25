import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { scale } from 'react-native-size-matters';

import {
    Button,
    Icon,
    NewPasswordDarkImage,
    NewPasswordImage,
    TextInput,
    ThanksDarkImage,
    ThanksImage,
} from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';

const ResetPassword = ({ navigation }) => {
    const theme = useTheme();

    const modalAnimatedValue = useRef(new Animated.Value(0)).current;
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState('');

    const animateX = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    useEffect(() => {
        if (modalVisible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalVisible]);

    const closeModal = useCallback(() => {
        Animated.timing(modalAnimatedValue, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false,
        }).start(() => {
            setModalVisible(false);
            navigation.replace('TabNavigator');
        });
    }, [modalAnimatedValue, navigation]);

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
            <Text style={[FONTS.h1, { color: theme.colors.text }]}>Enter New Password</Text>
            <Text
                style={[
                    FONTS.body1,
                    {
                        color: COLORS.text,
                        marginTop: 5,
                    },
                ]}
            >
                Please enter your new password
            </Text>
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
                        <NewPasswordDarkImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    ) : (
                        <NewPasswordImage height={SIZES.width * 0.7} width={SIZES.width * 0.7} />
                    )}
                </View>

                {/* Password */}
                <View style={{ gap: 16 }}>
                    <TextInput
                        autoCapitalize={'none'}
                        icon={'eye-slash-outline'}
                        label={'Password'}
                        secureTextEntry
                        onChange={(text) => setPassword(text)}
                        placeholder={'Enter Password'}
                        value={password}
                    />

                    <TextInput
                        autoCapitalize={'none'}
                        icon={'eye-slash-outline'}
                        label={'Re-Enter Password'}
                        secureTextEntry
                        onChange={(text) => setConfirmPassword(text)}
                        placeholder={'Re-Enter Password'}
                        value={confirmPassword}
                    />
                </View>

                <Button label={'Update Password'} onPress={() => setModalVisible(true)} />
            </ScrollView>

            <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
                <BlurView
                    blurType={'light'}
                    style={[StyleSheet.absoluteFillObject, { alignItems: 'center', justifyContent: 'center' }]}
                >
                    <Animated.View
                        style={{
                            backgroundColor: theme.colors.background,
                            borderRadius: 16,
                            height: scale(360),
                            paddingBottom: 16,
                            width: SIZES.width * 0.9,

                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,

                            elevation: 20,

                            opacity: animateX,
                            transform: [{ scale: animateX }],
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {theme.dark ? (
                                    <ThanksDarkImage height={scale(200)} width={scale(200)} />
                                ) : (
                                    <ThanksImage height={scale(200)} width={scale(200)} />
                                )}
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={[FONTS.h1, { color: COLORS.primary, fontSize: scale(22) }]}>
                                    Congralutations 🎉
                                </Text>
                                <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                                    Your account is ready to use
                                </Text>
                            </View>
                        </View>

                        <Button containerStyle={{ marginHorizontal: 20 }} label={'Back to Home'} onPress={closeModal} />
                    </Animated.View>
                </BlurView>
            </Modal>
        </SafeAreaView>
    );
};

export default ResetPassword;
