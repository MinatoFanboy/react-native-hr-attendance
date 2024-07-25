import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Button, Icon, IconButton } from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';

const Card = ({ backgroundColor, color, icon, onPress, right, title }) => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}
    >
        <View
            style={{
                alignItems: 'center',
                backgroundColor: backgroundColor,
                borderRadius: scale(40),
                justifyContent: 'center',
                height: scale(40),
                width: scale(40),
            }}
        >
            <Icon color={color} name={icon} size={scale(22)} type={'custom'} />
        </View>
        <Text style={[FONTS.h3, { color, flex: 1 }]}>{title}</Text>
        {right && <IconButton icon={'arrow-right'} />}
    </TouchableOpacity>
);

const Profile = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 40,
                    paddingBottom: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50),
                    paddingHorizontal: 20,
                }}
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginTop: 16,
                }}
            >
                <View style={{ alignItems: 'center', gap: 30 }}>
                    <View>
                        <Image
                            source={require('~/assets/images/avatar.png')}
                            resizeMode={'stretch'}
                            style={{ borderRadius: scale(100), height: scale(100), width: scale(100) }}
                        />

                        <View
                            style={{
                                backgroundColor: COLORS.primary,
                                borderColor: 'white',
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 8,
                                position: 'absolute',
                                bottom: 10,
                                right: 0,
                            }}
                        >
                            <Icon color={'white'} name={'camera-outline'} size={scale(20)} type={'custom'} />
                        </View>
                    </View>
                    <View style={{ gap: 4 }}>
                        <Text style={[FONTS.h2, { color: theme.colors.text, textAlign: 'center' }]}>Michael Mitc</Text>
                        <Text style={[FONTS.body1, { color: theme.colors.text, textAlign: 'center' }]}>
                            Lead UI/UX Desinger
                        </Text>
                    </View>
                    <Button
                        containerStyle={{ width: SIZES.width - 40 }}
                        label={'Edit Profile'}
                        onPress={() => navigation.navigate('ChangePassword')}
                    />
                </View>

                <View style={{ gap: 12 }}>
                    <Card
                        backgroundColor={theme.colors.background1}
                        color={theme.colors.text}
                        icon={'profile-outline'}
                        onPress={() => navigation.navigate('MyProfile')}
                        right={true}
                        title={'My Profile'}
                    />

                    <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                    <Card
                        backgroundColor={theme.colors.background1}
                        color={theme.colors.text}
                        icon={'setting-outline'}
                        right={true}
                        title={'Settings'}
                    />

                    <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                    <Card
                        backgroundColor={theme.colors.background1}
                        color={theme.colors.text}
                        icon={'document-text-outline'}
                        right={true}
                        title={'Terms & Conditions'}
                    />

                    <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                    <Card
                        backgroundColor={theme.colors.background1}
                        color={theme.colors.text}
                        icon={'shield-tick-outline'}
                        right={true}
                        title={'Privacy Policy'}
                    />

                    <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                    <Card
                        backgroundColor={theme.colors.dangerTransparent}
                        color={COLORS.danger}
                        icon={'logout-1'}
                        onPress={() => navigation.replace('Login')}
                        right={false}
                        title={'Logout'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
