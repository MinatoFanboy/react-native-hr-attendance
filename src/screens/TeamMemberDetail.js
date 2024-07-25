import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { format } from 'date-fns';

import { Header, Icon } from '~/components';
import { COLORS, FONTS, dummyData } from '~/constants';
import GlobalStyles from '~/styles';

const TeamMemberDetail = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, gap: 30 }}>
            <Header
                containerStyle={{ marginHorizontal: 16 }}
                header={'Jane Hawkins'}
                onPress={() => navigation.goBack()}
            />

            <FlatList
                contentContainerStyle={{ gap: 16 }}
                data={dummyData.teamMemberDetail}
                keyExtractor={(item) => `TeamMember-${item.id}`}
                renderItem={({ item }) => (
                    <View
                        style={[
                            {
                                backgroundColor: item.active ? COLORS.primary : theme.colors.background1,
                                borderRadius: 16,
                                gap: 16,
                                marginHorizontal: 20,
                                paddingLeft: 12,
                            },
                            GlobalStyles.shadow,
                        ]}
                    >
                        <View
                            style={{
                                backgroundColor: theme.colors.card1,
                                borderBottomRightRadius: 16,
                                borderTopRightRadius: 16,
                                flex: 1,
                                gap: 16,
                                padding: 16,
                            }}
                        >
                            <Text style={[FONTS.h4, { color: theme.colors.text }]}>
                                {format(item.date, 'MMMM dd, yyyy')}
                            </Text>
                            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 20 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
                                    <View
                                        style={{
                                            backgroundColor: item.active
                                                ? theme.colors.primaryTransparent
                                                : theme.colors.border1,
                                            borderRadius: 10,
                                            padding: 8,
                                        }}
                                    >
                                        <Icon
                                            color={item.active ? COLORS.primary : '#B1B3B9'}
                                            name={'login'}
                                            size={scale(20)}
                                            type={'custom'}
                                        />
                                    </View>
                                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>{item.from}</Text>
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
                                    <View
                                        style={{
                                            backgroundColor: item.active
                                                ? theme.colors.primaryTransparent
                                                : theme.colors.border1,
                                            borderRadius: 10,
                                            padding: 8,
                                        }}
                                    >
                                        <Icon
                                            color={item.active ? COLORS.primary : '#B1B3B9'}
                                            name={'logout'}
                                            size={scale(20)}
                                            type={'custom'}
                                        />
                                    </View>
                                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>{item.to}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            />
        </SafeAreaView>
    );
};

export default TeamMemberDetail;
