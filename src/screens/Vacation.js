import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { format } from 'date-fns';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS, dummyData } from '~/constants';
import GlobalStyles from '~/styles';
import { Icon } from '~/components';

const Vacation = () => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    /* Renders */
    const _renderHeader = () => (
        <View
            style={{
                paddingHorizontal: 20,
            }}
        >
            {/* Title */}
            <Text style={[FONTS.h2, { color: theme.colors.text }]}>Holiday List</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, gap: 30 }}>
            {/* Headers */}
            {_renderHeader()}

            <FlatList
                contentContainerStyle={{
                    gap: 16,
                    paddingBottom: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50),
                }}
                data={dummyData.holiday}
                keyExtractor={(item) => `Vacation-${item.id}`}
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
                                gap: 12,
                                padding: 16,
                            }}
                        >
                            <View
                                style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
                                    <Icon
                                        color={theme.colors.text}
                                        name={'calendar-outline'}
                                        size={scale(22)}
                                        type={'custom'}
                                    />
                                    <Text style={[FONTS.h4, { color: theme.colors.text, fontSize: scale(13) }]}>
                                        {format(item.date, 'MMMM dd, yyyy')}
                                    </Text>
                                </View>
                                <Text style={[FONTS.body2, { color: COLORS.text }]}>{format(item.date, 'EEEE')}</Text>
                            </View>
                            <Text style={[FONTS.h2, { color: theme.colors.text }]}>{item.title}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            />
        </SafeAreaView>
    );
};

export default Vacation;
