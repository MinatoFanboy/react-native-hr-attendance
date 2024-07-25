import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    ApplyLeave,
    ChangePassword,
    ForgotPassword,
    LeaveDetail,
    Login,
    MyProfile,
    Notification,
    OnBoard,
    Otp,
    PrivacyPolice,
    ResetPassword,
    SignUp,
    TeamMemberDetail,
    TermsAndConditions,
} from '~/screens';
import TabNavigator from './navigator';
import { lightTheme, darkTheme, useThemeContext } from '~/themes';

const Stack = createNativeStackNavigator();

const AppNavContainer = () => {
    const themeContext = useThemeContext();

    return (
        <>
            <NavigationContainer theme={themeContext.mode === 'dark' ? darkTheme : lightTheme}>
                <Stack.Navigator initialRouteName={'OnBoard'} screenOptions={{ headerShown: false }}>
                    <Stack.Screen component={ApplyLeave} name={'ApplyLeave'} />
                    <Stack.Screen component={ChangePassword} name={'ChangePassword'} />
                    <Stack.Screen component={ForgotPassword} name={'ForgotPassword'} />
                    <Stack.Screen component={LeaveDetail} name={'LeaveDetail'} />
                    <Stack.Screen component={Login} name={'Login'} />
                    <Stack.Screen component={MyProfile} name={'MyProfile'} />
                    <Stack.Screen component={Notification} name={'Notification'} />
                    <Stack.Screen component={OnBoard} name={'OnBoard'} />
                    <Stack.Screen component={Otp} name={'Otp'} />
                    <Stack.Screen component={PrivacyPolice} name={'PrivacyPolice'} />
                    <Stack.Screen component={ResetPassword} name={'ResetPassword'} />
                    <Stack.Screen component={SignUp} name={'SignUp'} />
                    <Stack.Screen component={TabNavigator} name={'TabNavigator'} />
                    <Stack.Screen component={TeamMemberDetail} name={'TeamMemberDetail'} />
                    <Stack.Screen component={TermsAndConditions} name={'TermsAndConditions'} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppNavContainer;
