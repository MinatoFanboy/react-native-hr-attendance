import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale } from 'react-native-size-matters';

import { Button, GoogleIcon, TextButton, TextInput } from '~/components';
import { COLORS, FONTS } from '~/constants';

const Login = ({ navigation }) => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* Renders */
    const _renderHeaderForm = () => (
        <>
            {/* Logo */}
            <Image
                resizeMode={'contain'}
                source={require('~/assets/images/logo.png')}
                style={{ height: scale(72), width: scale(72) }}
            />
            {/* Title */}
            <View style={{ gap: 5 }}>
                <Text style={[FONTS.h1, { color: theme.colors.text, width: '80%' }]}>
                    Welcome Back 👋 to <Text style={{ color: COLORS.primary }}>HR Attendee</Text>
                </Text>
                <Text
                    style={[
                        FONTS.body1,
                        {
                            color: COLORS.text,
                        },
                    ]}
                >
                    Hello there, login to continue
                </Text>
            </View>
        </>
    );

    const _renderMainForm = () => (
        <View style={{ gap: 30 }}>
            {/* Email, Password, Forgot Password */}
            <View style={{ gap: 10 }}>
                {/** Email && Password */}
                <View style={{ gap: 16 }}>
                    {/** Email */}
                    <TextInput
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        label={'Email Address'}
                        onChange={(text) => setEmail(text)}
                        placeholder={'Enter Email Address'}
                        value={email}
                    />

                    {/* Password */}
                    <TextInput
                        autoCapitalize={'none'}
                        icon={'eye-slash-outline'}
                        label={'Password'}
                        secureTextEntry
                        onChange={(text) => setPassword(text)}
                        placeholder={'Enter Password'}
                        value={password}
                    />
                </View>

                {/* Forgot Password */}
                <View style={{ alignItems: 'flex-end' }}>
                    <TextButton onPress={() => navigation.navigate('ForgotPassword')} title={'Forgot Password ?'} />
                </View>
            </View>

            {/* Submit */}
            <Button label={'Login'} onPress={() => navigation.replace('TabNavigator')} />
        </View>
    );

    const _renderOtherLogin = () => (
        <View style={{ gap: 20 }}>
            {/* Separate */}
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
                <View style={{ backgroundColor: COLORS.text, flex: 1, height: StyleSheet.hairlineWidth }} />
                <Text style={[FONTS.body1, { color: COLORS.text }]}>Or continue with social account</Text>
                <View style={{ backgroundColor: COLORS.text, flex: 1, height: StyleSheet.hairlineWidth }} />
            </View>

            {/* Login With Google */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    alignItems: 'center',
                    borderColor: COLORS.text,
                    borderRadius: 10,
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                    height: scale(51),
                }}
            >
                <GoogleIcon height={scale(22)} />

                <Text style={{ color: theme.colors.text, fontFamily: 'Lexend-Light', fontSize: scale(15) }}>
                    Google
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

            {/* Scroll */}
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20, flex: 1 }}
            >
                {/* Form */}
                <View style={{ flex: 1, gap: 20 }}>
                    {/* Header Form */}
                    {_renderHeaderForm()}

                    {/* Main Form */}
                    {_renderMainForm()}

                    {/* Other Login */}
                    {_renderOtherLogin()}
                </View>

                {/* Didn't have an account */}
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>Didn't have an account? </Text>
                    <TextButton onPress={() => navigation.navigate('SignUp')} title={'Register'} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default Login;
