import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Header, Icon } from '~/components';
import { COLORS, FONTS, dummyData } from '~/constants';

const Notification = ({ navigation }) => {
    const theme = useTheme();

    const _renderIcon = (type) => {
        switch (type) {
            case 'user':
                return <Icon color={COLORS.primary} name={'profile-outline'} size={scale(22)} type={'custom'} />;

            case 'password':
                return <Icon color={COLORS.primary} name={'lock-outline'} size={scale(22)} type={'custom'} />;

            case 'personal':
                return (
                    <Image
                        resizeMode={'stretch'}
                        source={require('~/assets/images/avatar.png')}
                        style={{ borderRadius: scale(50), height: scale(50), width: scale(50) }}
                    />
                );

            default:
                return <Icon color={COLORS.primary} name={'mobile-outline'} size={scale(22)} type={'custom'} />;
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Notification'} onPress={() => navigation.goBack()} />

            <FlatList
                data={dummyData.notification}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', gap: 16 }}>
                        <View
                            style={{
                                backgroundColor: theme.colors.primaryTransparent,
                                alignItems: 'center',
                                borderRadius: scale(50),
                                justifyContent: 'center',
                                height: scale(50),
                                width: scale(50),
                            }}
                        >
                            {_renderIcon(item.type)}
                        </View>
                        <View style={{ flex: 1, gap: 12 }}>
                            <Text style={[FONTS.h3, { color: theme.colors.text }]}>{item.title}</Text>
                            <Text style={[FONTS.body2, { color: theme.colors.text, fontSize: scale(12) }]}>
                                {item.content}
                            </Text>
                            <Text style={[FONTS.body2, { color: COLORS.text, fontSize: scale(12) }]}>{item.time}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 40 }}
                // eslint-disable-next-line react/no-unstable-nested-components
                ItemSeparatorComponent={() => (
                    <View style={{ backgroundColor: '#F7F7F8', height: 1, marginVertical: 16 }} />
                )}
            />
        </SafeAreaView>
    );
};

export default Notification;
