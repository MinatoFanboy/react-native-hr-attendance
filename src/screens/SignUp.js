import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale } from 'react-native-size-matters';

import { Button, GoogleIcon, Icon, TextButton, TextInput } from '~/components';
import { COLORS, FONTS } from '~/constants';

const SignUp = ({ navigation }) => {
    const theme = useTheme();

    const [isDisabled, setIsDisabled] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [isAgree, setIsAgree] = useState(false);
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    /* Disable Button If Required Input Empty And Not Agree Terms */
    useEffect(() => {
        if (confirmPassword && email && firstName && isAgree && lastName && password) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [confirmPassword, email, firstName, isAgree, lastName, password]);

    /* Renders */
    const _renderHeaderForm = () => (
        <>
            <Image
                resizeMode={'contain'}
                source={require('~/assets/images/logo.png')}
                style={{ height: scale(72), width: scale(72) }}
            />
            <View style={{ gap: 5 }}>
                <Text style={[FONTS.h1, { color: theme.colors.text, width: '80%' }]}>
                    Register Account to <Text style={{ color: COLORS.primary }}>HR Attendee</Text>
                </Text>
                <Text
                    style={[
                        FONTS.body1,
                        {
                            color: COLORS.text,
                        },
                    ]}
                >
                    Hello there, register to continue
                </Text>
            </View>
        </>
    );

    const _renderMainForm = () => (
        <View style={{ gap: 30 }}>
            {/* First Name, Last Name, Email, Password, Confirm Password, Accept Terms */}
            <View style={{ gap: 10 }}>
                {/* First Name, Last Name, Email, Password, Confirm Password */}
                <View style={{ gap: 16 }}>
                    {/* First Name */}
                    <TextInput
                        label={'First Name'}
                        onChange={(text) => setFirstName(text)}
                        placeholder={'Enter First Name'}
                        value={firstName}
                    />

                    {/* Last Name */}
                    <TextInput
                        label={'Last Name'}
                        onChange={(text) => setLastName(text)}
                        placeholder={'Enter Last Name'}
                        value={lastName}
                    />

                    {/* Email */}
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

                    {/* Confirm Password */}
                    <TextInput
                        autoCapitalize={'none'}
                        icon={'eye-slash-outline'}
                        label={'Confirm Password'}
                        secureTextEntry
                        onChange={(text) => setConfirmPassword(text)}
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                    />
                </View>

                {/* Accept Terms */}
                <View style={{ alignItems: 'flex-start', flexDirection: 'row', gap: 12, marginTop: 12 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setIsAgree((prev) => !prev)}>
                        <Icon
                            color={isAgree ? COLORS.primary : COLORS.text}
                            name={isAgree ? 'tick-square' : 'square'}
                            size={scale(20)}
                            type={'custom'}
                        />
                    </TouchableOpacity>
                    <Text style={[FONTS.body1, { color: theme.colors.text, flex: 1 }]}>
                        I agree to the{' '}
                        <Text style={{ color: COLORS.primary }}>
                            <Text
                                onPress={() => navigation.navigate('TermsAndConditions')}
                                style={{ backgroundColor: 'transparent' }}
                            >
                                Terms & Conditions
                            </Text>{' '}
                            & <Text onPress={() => navigation.navigate('PrivacyPolice')}>Privacy Policy</Text>
                        </Text>{' '}
                        set out by the site.
                    </Text>
                </View>
            </View>

            {/* Submit */}
            <Button disabled={isDisabled} label={'Register'} />
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

            {/* Already have an account? */}
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={[FONTS.body1, { color: theme.colors.text }]}>Already have an account? </Text>
                <TextButton onPress={() => navigation.navigate('Login')} title={'Login'} />
            </View>
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
                <View style={{ gap: 20 }}>
                    {/* Header Form */}
                    {_renderHeaderForm()}

                    {/* Main Form */}
                    {_renderMainForm()}

                    {/* Other Login */}
                    {_renderOtherLogin()}
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
