import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Button, Header } from '~/components';
import { COLORS, FONTS } from '~/constants';

const Card = ({ color, content, title }) => (
    <View style={{ gap: 16 }}>
        <View style={{ gap: 4 }}>
            <Text style={[FONTS.body2, { color: COLORS.text }]}>{title}</Text>
            <Text style={[FONTS.body1, { color }]}>{content}</Text>
        </View>
        <View style={{ backgroundColor: '#F7F7F8', height: 1 }} />
    </View>
);

const LeaveDetail = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Leave Details'} onPress={() => navigation.goBack()} />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, gap: 20 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 30 }}
            >
                <Card color={theme.colors.text} content={'Sick Leave'} title={'Title'} />
                <Card color={theme.colors.text} content={'Medical Leave'} title={'Leave Type'} />
                <Card color={theme.colors.text} content={'April 15, 2023 - April 18, 2023'} title={'Date'} />
                <Card color={theme.colors.text} content={'I need to take a medical leave.'} title={'Reason'} />
                <Card color={theme.colors.text} content={'February 20, 2023'} title={'Applied on'} />
                <Card color={theme.colors.text} content={'(603) 555-0123'} title={'Contact Number'} />
                <Card color={theme.colors.text} content={'Pending'} title={'Status'} />
                <Card color={theme.colors.text} content={'Michael Mitc'} title={'Approved By'} />
            </ScrollView>

            <View style={{ flexDirection: 'row', gap: 12 }}>
                <Button
                    containerStyle={[styles.buttonWrapper, { backgroundColor: COLORS.danger }]}
                    icon={'close-circle-outline'}
                    label={'Reject'}
                    labelStyle={styles.label}
                />
                <Button
                    containerStyle={[styles.buttonWrapper, { backgroundColor: COLORS.success }]}
                    icon={'tick-circle-outline'}
                    label={'Accept'}
                    labelStyle={styles.label}
                    onPress={() => navigation.navigate('ApplyLeave')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        height: scale(40),
    },
    label: {
        fontSize: scale(13),
    },
});

export default LeaveDetail;
