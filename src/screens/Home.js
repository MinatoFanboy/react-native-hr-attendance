import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Icon, Swipe, TextButton } from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';
import { format, isSameDay } from 'date-fns';
import GlobalStyles from '~/styles';

const weeks = [
    { id: 1, date: new Date(2023, 4, 6) },
    { id: 2, date: new Date(2023, 4, 7) },
    { id: 3, date: new Date(2023, 4, 8) },
    { id: 4, date: new Date(2023, 4, 9) },
    { id: 5, date: new Date(2023, 4, 10) },
    { id: 6, date: new Date(2023, 4, 11) },
    { id: 7, date: new Date(2023, 4, 12) },
];

const attendances = [
    { icon: 'login', id: 0, note: 'On Time', time: '10:20 am', title: 'Check In' },
    { icon: 'logout', id: 1, note: 'Go Home', time: '07:00 pm', title: 'Check Out' },
    { icon: 'coffee-outline', id: 2, note: 'Avg Time 30 min', time: '00:30 min', title: 'Break Time' },
    { icon: 'calendar-outline', id: 3, note: 'Working Days', time: '28', title: 'Working Dats' },
];

const activities = [
    { date: new Date(2023, 3, 17), icon: 'login', id: 0, note: 'On Time', time: '10:00 am', title: 'Check In' },
    { date: new Date(2023, 3, 17), icon: 'logout', id: 1, note: 'Go Home', time: '12:30 pm', title: 'Check Out' },
    {
        date: new Date(2023, 3, 17),
        icon: 'coffee-outline',
        id: 2,
        note: 'Avg Time 30 min',
        time: '00:30 min',
        title: 'Break Time',
    },
];

const Home = () => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const [today, setToday] = useState(new Date(2023, 4, 9));

    /* Renders */
    const _renderHeader = () => (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: 16,
                paddingHorizontal: 20,
            }}
        >
            {/* Avatar */}
            <Image source={require('~/assets/images/avatar.png')} style={styles.circle} />

            {/* Name && Job */}
            <View style={{ flex: 1, gap: 8 }}>
                {/* Add */}
                <Text style={[FONTS.h2, { color: theme.colors.text }]}>Michael Mitic</Text>
                <Text style={[FONTS.body1, { color: theme.colors.text }]}>Lead UI/UX Manager</Text>
            </View>

            {/* Notification */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={[
                    styles.circle,
                    { alignItems: 'center', borderColor: '#EFF0F1', borderWidth: 1, justifyContent: 'center' },
                ]}
            >
                <Icon color={theme.colors.text} name={'notification-bing-outline'} size={scale(26)} type={'custom'} />
            </TouchableOpacity>
        </View>
    );

    const _renderCalendar = () => (
        <FlatList
            contentContainerStyle={{ gap: 16, paddingHorizontal: 20 }}
            data={weeks}
            horizontal
            keyExtractor={(item) => `Calendar-${item.id}`}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setToday(item.date)}
                    style={{
                        alignItems: 'center',
                        backgroundColor: isSameDay(today, item.date) ? COLORS.primary : theme.colors.card,
                        borderColor: isSameDay(today, item.date) ? COLORS.primary : theme.colors.border1,
                        borderRadius: 10,
                        borderWidth: 1,
                        gap: 8,
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                    }}
                >
                    <Text
                        style={[
                            FONTS.h2,
                            {
                                color: isSameDay(today, item.date) ? 'white' : theme.colors.text,
                                textAlign: 'center',
                            },
                        ]}
                    >
                        {format(item.date, 'dd')}
                    </Text>
                    <Text
                        style={[
                            FONTS.body2,
                            { color: isSameDay(today, item.date) ? 'white' : theme.colors.text, textAlign: 'center' },
                        ]}
                    >
                        {format(item.date, 'EEE')}
                    </Text>
                </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
        />
    );

    const _renderAttendance = () => (
        <View style={{ gap: 20 }}>
            {/* Attendance Title */}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={[FONTS.h3, { color: theme.colors.text }]}>Today Attendance</Text>
            </View>

            {/* Attendance Content */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20 }}>
                {attendances.map((attendance, index) => (
                    <View
                        key={`Attendance-${attendance.id}`}
                        style={[
                            {
                                backgroundColor: theme.colors.card1,
                                borderRadius: 16,
                                gap: 12,
                                marginLeft: index % 2 === 0 ? 0 : 12,
                                marginTop: index > 1 ? 12 : 0,
                                padding: 16,
                                width: (SIZES.width - 52) / 2 - 1,
                            },
                            GlobalStyles.shadow,
                        ]}
                    >
                        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
                            <View
                                style={{
                                    backgroundColor: theme.colors.primaryTransparent,
                                    borderRadius: 10,
                                    padding: 8,
                                }}
                            >
                                <Icon color={COLORS.primary} name={attendance.icon} size={scale(20)} type={'custom'} />
                            </View>
                            <Text style={[FONTS.body2, { color: theme.colors.text }]}>{attendance.title}</Text>
                        </View>
                        <Text style={[FONTS.h2, { color: theme.colors.text }]}>{attendance.time}</Text>
                        <Text style={[FONTS.body2, { color: theme.colors.text }]}>{attendance.note}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

    const _renderActivity = () => (
        <View style={{ gap: 20 }}>
            {/* Activity Title */}
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                }}
            >
                <Text style={[FONTS.h3, { color: theme.colors.text }]}>Your activity</Text>
                <TextButton title={'View All'} />
            </View>

            {/* Activity Content */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginHorizontal: 20 }}>
                {activities.map((activity) => (
                    <View
                        key={`Activity-${activity.id}`}
                        style={[
                            {
                                alignItems: 'center',
                                backgroundColor: theme.colors.card1,
                                borderRadius: 16,
                                flexDirection: 'row',
                                gap: 12,
                                padding: 16,
                            },
                            GlobalStyles.shadow,
                        ]}
                    >
                        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
                            <View
                                style={{
                                    backgroundColor: theme.colors.primaryTransparent,
                                    borderRadius: 10,
                                    padding: 10,
                                }}
                            >
                                <Icon color={COLORS.primary} name={activity.icon} size={scale(22)} type={'custom'} />
                            </View>
                            <View style={{ flex: 1, gap: 6 }}>
                                <Text style={[FONTS.h3, { color: theme.colors.text }]}>{activity.title}</Text>
                                <Text style={[FONTS.body2, { color: COLORS.text }]}>
                                    {format(activity.date, 'MMMM dd, yyyy')}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', gap: 6 }}>
                                <Text style={[FONTS.h3, { color: theme.colors.text, fontSize: scale(14) }]}>
                                    {activity.time}
                                </Text>
                                <Text style={[FONTS.body2, { color: COLORS.text }]}>{activity.note}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, gap: 24 }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            {/* Headers */}
            {_renderHeader()}

            {/* Calendar */}
            {_renderCalendar()}

            {/* Scroll */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 30,
                    paddingBottom: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50),
                    paddingTop: 20,
                }}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: theme.colors.gray, borderRadius: 24, flex: 1 }}
            >
                {/* Attendance */}
                {_renderAttendance()}

                {/* Activity */}
                {_renderActivity()}
            </ScrollView>

            <Swipe />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    circle: {
        borderRadius: scale(55),
        height: scale(55),
        width: scale(55),
    },
});

export default Home;
