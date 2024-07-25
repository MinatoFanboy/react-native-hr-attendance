import React, { useRef, useState } from 'react';
import { FlatList, LayoutAnimation, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS, SIZES } from '~/constants';
import { Button, Header, Icon, IconButton } from '~/components';

const tabs = ['Personal', 'Professional', 'Documents'];

const Card = ({ color, content, title }) => (
    <View style={{ gap: 16 }}>
        <View style={{ gap: 4 }}>
            <Text style={[FONTS.body2, { color: COLORS.text }]}>{title}</Text>
            <Text numberOfLines={1} style={[FONTS.body1, { color }]}>
                {content}
            </Text>
        </View>
        <View style={{ backgroundColor: '#F7F7F8', height: 1 }} />
    </View>
);

const CardDocument = ({ backgroundColor, color, title }) => (
    <View style={{ gap: 16 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
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
                <Icon color={color} name={'document-text-outline'} size={scale(22)} type={'custom'} />
            </View>
            <Text style={[FONTS.h3, { color, flex: 1 }]}>{title}</Text>
            <IconButton icon={'document-download-outline'} />
        </View>
        <View style={{ backgroundColor: '#F7F7F8', height: 1 }} />
    </View>
);

const MyProfile = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const ref = useRef(null);
    const [active, setActive] = useState(0);

    /* Renders */
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

    const _renderPersonal = () => (
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
            <Card color={theme.colors.text} content={'Michael Mitc'} title={'Full Name'} />
            <Card color={theme.colors.text} content={'michael.mitc@example.com'} title={'Email Address'} />
            <Card color={theme.colors.text} content={'(603) 555-0123'} title={'Phone Number'} />
            <Card color={theme.colors.text} content={'3517 W.Gray St.Utica, Pennsylvania 57867'} title={'Address'} />
        </View>
    );

    const _renderProfessional = () => (
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
            <Card color={theme.colors.text} content={'7879987'} title={'Employee ID'} />
            <Card color={theme.colors.text} content={'Lead UX/UI Desinger'} title={'Designation'} />
            <Card color={theme.colors.text} content={'michael.mitc@example.com'} title={'Company Email Address'} />
            <Card color={theme.colors.text} content={'Department'} title={'Employee Type'} />
            <Card color={theme.colors.text} content={'Robert Fox'} title={'Reporting Manager'} />
            <Card color={theme.colors.text} content={'2 years 5 Months'} title={'Company Expericence'} />
            <Card color={theme.colors.text} content={'10:00 am to 07:00 pm'} title={'Office Time'} />
        </View>
    );

    const _renderDocuments = () => (
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
            <CardDocument backgroundColor={theme.colors.background1} color={theme.colors.text} title={'Offer Letter'} />
            <CardDocument
                backgroundColor={theme.colors.background1}
                color={theme.colors.text}
                title={'Appointment Letter'}
            />
            <CardDocument
                backgroundColor={theme.colors.background1}
                color={theme.colors.text}
                title={'Bond Agreement'}
            />
            <CardDocument
                backgroundColor={theme.colors.background1}
                color={theme.colors.text}
                title={'Appraisal Letter'}
            />
            <CardDocument backgroundColor={theme.colors.background1} color={theme.colors.text} title={'Salary Slip'} />
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            {/* Header */}
            <Header
                header={'My Profile'}
                onPress={() => navigation.goBack()}
                containerStyle={{ marginHorizontal: 20 }}
            />

            {/* Scroll */}
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
                            {active === 0 && <>{_renderPersonal()}</>}
                            {active === 1 && <>{_renderProfessional()}</>}
                            {active === 2 && <>{_renderDocuments()}</>}
                        </View>
                    )}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0, marginTop: 30 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyProfile;
