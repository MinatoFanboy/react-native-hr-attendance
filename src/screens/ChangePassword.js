import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, Header, TextInput } from '~/components';

const ChangePassword = ({ navigation }) => {
    const theme = useTheme();

    const [confirmPassword, setConfirmPassword] = useState('123456');
    const [password, setPassword] = useState('123456');

    const _renderMainForm = () => (
        <View style={{ gap: 30 }}>
            {/* Password & Confirm Password */}
            <View style={{ gap: 10 }}>
                {/** Password & Confirm Password */}
                <View style={{ gap: 16 }}>
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
                        placeholder={'Enter Confirm Password'}
                        value={confirmPassword}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Change Password'} onPress={() => navigation.goBack()} />

            {/* Scroll */}
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 40, flex: 1 }}
            >
                <View style={{ flex: 1, gap: 20 }}>
                    {/* Main Form */}
                    {_renderMainForm()}
                </View>
            </KeyboardAwareScrollView>

            <Button label={'Update'} onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default ChangePassword;
