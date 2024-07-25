import React, { useRef, useState } from 'react';
import {
    FlatList,
    Image,
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
import { scale } from 'react-native-size-matters';
import { format } from 'date-fns';

import { Button, Card, CheckBoxList, IconButton, SelectInput } from '~/components';
import { COLORS, FONTS, SIZES, dummyData } from '~/constants';
import GlobalStyles from '~/styles';

const tabs = ['Upcoming', 'Past', 'Team Leave'];

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Note = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const ref = useRef(null);
    const filterRef = useRef(null);
    const [active, setActive] = useState(0);
    const [teamMember, setTeamMember] = useState({ label: 'Alexa William', value: 0 });

    /* Renders */
    const _renderHeader = () => (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}
        >
            {/* Title */}
            <Text style={[FONTS.h2, { color: theme.colors.text }]}>All Leaves</Text>

            {/* Add && Filter */}
            <View style={{ flexDirection: 'row', gap: 16 }}>
                {/* Add */}
                <IconButton color={theme.colors.text} icon={'add-square-outline'} />

                {/* Filter */}
                <IconButton
                    color={theme.colors.text}
                    icon={'filter-outline'}
                    onPress={() => {
                        if (filterRef.current) {
                            filterRef.current.open();
                        }
                    }}
                />
            </View>
        </View>
    );

    const _renderCategory = () => (
        <View style={{ gap: 12, paddingHorizontal: 20 }}>
            {/* Balance && Approved */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
                {/* Leave Balance */}
                <View
                    style={[
                        styles.categoryWrapper,
                        { backgroundColor: theme.colors.primaryTransparent, borderColor: COLORS.primary },
                    ]}
                >
                    <Text style={[styles.categoryLabel, { color: theme.colors.text }]}>Leave Balance</Text>
                    <Text style={[styles.categoryNumber, { color: COLORS.primary }]}>20</Text>
                </View>

                {/* Leave Approved */}
                <View
                    style={[
                        styles.categoryWrapper,
                        { backgroundColor: theme.colors.greenTransparent, borderColor: '#A3D139' },
                    ]}
                >
                    <Text style={[styles.categoryLabel, { color: theme.colors.text }]}>Leave Approved</Text>
                    <Text style={[styles.categoryNumber, { color: '#A3D139' }]}>2</Text>
                </View>
            </View>

            {/* Pending && Cancelled */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
                {/* Pending */}
                <View
                    style={[
                        styles.categoryWrapper,
                        { backgroundColor: theme.colors.successTransparent, borderColor: COLORS.success },
                    ]}
                >
                    <Text style={[styles.categoryLabel, { color: theme.colors.text }]}>Leave Pending</Text>
                    <Text style={[styles.categoryNumber, { color: COLORS.success }]}>20</Text>
                </View>

                {/* Cancelled */}
                <View
                    style={[
                        styles.categoryWrapper,
                        { backgroundColor: theme.colors.dangerTransparent, borderColor: COLORS.danger },
                    ]}
                >
                    <Text style={[styles.categoryLabel, { color: theme.colors.text }]}>Leave Cancelled</Text>
                    <Text style={[styles.categoryNumber, { color: COLORS.danger }]}>2</Text>
                </View>
            </View>
        </View>
    );

    const _renderTabs = () => (
        <View
            style={{
                backgroundColor: theme.colors.gray,
                borderRadius: 10,
                flexDirection: 'row',
                marginTop: 30,
                marginHorizontal: 20,
            }}
        >
            {tabs.map((tab, index) => (
                <Button
                    containerStyle={{
                        backgroundColor: active === index ? COLORS.primary : 'transparent',
                        flex: 1,
                        height: scale(47),
                    }}
                    key={`Tab-${index}`}
                    label={tab}
                    labelStyle={[FONTS.body1, { color: active === index ? 'white' : theme.colors.text }]}
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setActive(index);
                        ref.current?.scrollToIndex({ animated: true, index });
                    }}
                />
            ))}
        </View>
    );

    const _renderListUpcoming = () => (
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={{ gap: 16 }}>
                {dummyData.dataUpcoming.map((dateUpcoming) => (
                    <Card item={dateUpcoming} key={`DataUpcoming-${dateUpcoming.id}`} />
                ))}
            </View>
        </View>
    );

    const _renderListPast = () => (
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={{ gap: 16 }}>
                {dummyData.dataPast.map((dataPast) => (
                    <Card item={dataPast} key={`DataPast-${dataPast.id}`} />
                ))}
            </View>
        </View>
    );

    const _renderListLeave = () => (
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={{ gap: 16 }}>
                {dummyData.dataLeave.map((dataLeave) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={`DataLeave-${dataLeave.id}`}
                        onPress={() => navigation.navigate('LeaveDetail')}
                        style={[
                            {
                                backgroundColor: theme.colors.card,
                                borderColor: theme.colors.border,
                                borderRadius: 16,
                                borderWidth: 1,
                                gap: 16,
                                padding: 16,
                            },
                            GlobalStyles.shadow,
                        ]}
                    >
                        <View style={{ flexDirection: 'row', gap: 16 }}>
                            <Image
                                source={require('~/assets/images/avatar.png')}
                                resizeMode={'stretch'}
                                style={{ borderRadius: scale(40), height: scale(40), width: scale(40) }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[FONTS.body1, { color: theme.colors.text }]}>{dataLeave.createBy}</Text>
                                <Text
                                    style={[FONTS.body1, { color: theme.colors.text, fontFamily: 'Lexend-Medium' }]}
                                >{`${format(dataLeave.dateStart, 'MMM dd, yyyy')} - ${format(
                                    dataLeave.dateEnd,
                                    'MMM dd, yyyy',
                                )}`}</Text>
                            </View>
                        </View>
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
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    const _renderFilter = () => (
        <RBSheet
            ref={filterRef}
            height={SIZES.height * 0.7}
            openDuration={250}
            dragFromTopOnly
            closeOnDragDown
            customStyles={{
                container: {
                    backgroundColor: theme.colors.background,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
            }}
        >
            <View style={{ flex: 1, gap: 20, paddingHorizontal: 20 }}>
                {/* Header */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[FONTS.h4, { flex: 1, color: theme.colors.text }]}>Filter</Text>
                    <IconButton
                        color={theme.colors.text}
                        icon={'close-circle-outline'}
                        onPress={() => {
                            if (filterRef.current) {
                                filterRef.current.close();
                            }
                        }}
                    />
                </View>

                {/* Filter Form */}
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, gap: 16 }}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                >
                    <View style={{ gap: 12 }}>
                        {/* Status */}
                        <CheckBoxList array={['Approved', 'Upapproved', 'Pending']} title={'Status'} />

                        {/* Separate */}
                        <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                        {/* Leave Type */}
                        <CheckBoxList array={['Sick Leave', 'Planned Leave', 'Holiday']} title={'Leave Type'} />

                        {/* Separate */}
                        <View style={{ backgroundColor: theme.colors.border1, height: 1 }} />

                        {/* Team Member */}
                        <Text style={[FONTS.body1, { fontFamily: 'Lexend-Medium', color: theme.colors.text }]}>
                            Team Member
                        </Text>
                        <SelectInput
                            array={[{ label: 'Alexa William', value: 0 }]}
                            label={'Select Team Member'}
                            onChange={(value) => setTeamMember(value)}
                            value={teamMember}
                        />
                    </View>
                </ScrollView>

                {/* Buttom */}
                <View style={{ flexDirection: 'row', gap: 16, marginBottom: insets.bottom === 0 ? 16 : insets.bottom }}>
                    <Button
                        containerStyle={{
                            backgroundColor: theme.colors.gray,
                            flex: 1,
                        }}
                        label={'Reset'}
                        labelStyle={{ color: theme.colors.text }}
                        onPress={() => {
                            if (ref.current) {
                                ref.current?.close();
                            }
                        }}
                    />
                    <Button
                        containerStyle={{
                            flex: 1,
                        }}
                        label={'Apply'}
                        onPress={() => {
                            if (ref.current) {
                                ref.current?.close();
                            }
                        }}
                    />
                </View>
            </View>
        </RBSheet>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            {/* Headers */}
            {_renderHeader()}

            {/* Body */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50),
                }}
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginTop: 16,
                }}
            >
                {/* Category */}
                {_renderCategory()}

                {/* Tabs */}
                {_renderTabs()}

                {/* List */}
                <FlatList
                    data={tabs}
                    horizontal
                    key={(_, index) => `Data-${index}`}
                    ref={ref}
                    renderItem={() => (
                        <View style={{ width: SIZES.width }}>
                            {active === 0 && <>{_renderListUpcoming()}</>}
                            {active === 1 && <>{_renderListPast()}</>}
                            {active === 2 && <>{_renderListLeave()}</>}
                        </View>
                    )}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0 }}
                />
            </ScrollView>

            {/* Filter */}
            {_renderFilter()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        height: scale(40),
    },
    categoryLabel: {
        fontFamily: 'Lexend-Medium',
        fontSize: scale(15),
        width: ((SIZES.width - 40 - 12) / 2) * 0.6,
    },
    categoryNumber: {
        fontFamily: 'Lexend-Medium',
        fontSize: scale(19),
    },
    categoryWrapper: {
        borderRadius: 16,
        borderWidth: 1,
        gap: 16,
        padding: 16,
        width: (SIZES.width - 40 - 12) / 2,
    },
    label: {
        fontSize: scale(13),
    },
});

export default Note;
