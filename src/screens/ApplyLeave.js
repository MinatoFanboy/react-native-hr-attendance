import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RBSheet from 'react-native-raw-bottom-sheet';
import { scale } from 'react-native-size-matters';

import { Button, DatePicker, Header, Icon, PhoneInput, SelectInput, TextArea, TextInput } from '~/components';
import { COLORS, FONTS, SIZES } from '~/constants';

const ApplyLeave = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    const ref = useRef();
    const [endDate] = useState(new Date(2023, 4, 18));
    const [leaveType, setLeaveType] = useState({ label: 'Medical Leave', value: 1 });
    const [phone, setPhone] = useState('6035550123');
    const [reason, setReason] = useState('I need to take a medical leave.');
    const [startDate] = useState(new Date(2023, 4, 15));
    const [title, setTitle] = useState('Sick Leave');

    const _renderMainForm = () => (
        <View style={{ gap: 30 }}>
            {/* Title */}
            <View style={{ gap: 10 }}>
                {/** Title */}
                <View style={{ gap: 16 }}>
                    {/** Title */}
                    <TextInput
                        label={'Title'}
                        onChange={(text) => setTitle(text)}
                        placeholder={'Enter Title'}
                        value={title}
                    />

                    {/* Leave Type */}
                    <SelectInput
                        array={[{ label: 'Medical Leave', value: 0 }]}
                        label={'Leave Type'}
                        onChange={(value) => setLeaveType(value)}
                        value={leaveType}
                    />

                    {/* Contact Number */}
                    <PhoneInput
                        label={'Contact Number'}
                        onChange={(text) => setPhone(text)}
                        placeholder={'Enter Title'}
                        value={phone}
                    />

                    {/* Start Date */}
                    <DatePicker label={'Start Date'} value={startDate} />

                    {/* End Date */}
                    <DatePicker label={'End Date'} value={endDate} />

                    {/* Reason */}
                    <TextArea label={'Reason for Leave'} onChange={(text) => setReason(text)} value={reason} />
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Apply Leave'} onPress={() => navigation.goBack()} />

            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20, flex: 1 }}
            >
                {_renderMainForm()}
            </KeyboardAwareScrollView>

            <Button
                containerStyle={{ marginBottom: insets.bottom === 0 ? 16 : insets.bottom }}
                label={'Apply Leave'}
                onPress={() => {
                    if (ref.current) {
                        ref.current?.open();
                    }
                }}
            />

            <RBSheet
                ref={ref}
                height={SIZES.height / 2}
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
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ alignItems: 'center', flex: 1, gap: 20 }}>
                        <View
                            style={[
                                styles.circle,
                                {
                                    backgroundColor: theme.colors.primaryTransparent,
                                    height: scale(120),
                                    width: scale(120),
                                },
                            ]}
                        >
                            <View
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor: COLORS.primary,
                                        height: scale(85),
                                        width: scale(85),
                                    },
                                ]}
                            >
                                <Icon color={'white'} name={'tick-circle-outline'} size={scale(32)} type={'custom'} />
                            </View>
                        </View>
                        <View style={{ gap: 12, width: scale(150) }}>
                            <Text style={[FONTS.h2, { color: theme.colors.text, textAlign: 'center' }]}>
                                Leave Applied Successfully
                            </Text>
                            <Text style={[FONTS.body1, { color: theme.colors.text, textAlign: 'center' }]}>
                                Your Leave has been applied successfully
                            </Text>
                        </View>
                    </View>
                    <Button
                        containerStyle={{
                            marginBottom: insets.bottom === 0 ? 16 : insets.bottom,
                            width: SIZES.width - 40,
                        }}
                        label={'Done'}
                        onPress={() => {
                            if (ref.current) {
                                ref.current?.onClose();
                            }
                            setTimeout(() => {
                                navigation.goBack();
                            }, 250);
                        }}
                    />
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    circle: {
        alignItems: 'center',
        borderRadius: 999,
        justifyContent: 'center',
    },
});

export default ApplyLeave;
