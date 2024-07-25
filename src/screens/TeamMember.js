import React, { useRef } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Button, Icon } from '~/components';
import { COLORS, FONTS, dummyData } from '~/constants';
import GlobalStyles from '~/styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const TeamMember = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const ref = useRef(null);

    const _renderHeader = () => (
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* Title */}
            <Text
                style={{
                    color: theme.colors.text,
                    fontFamily: 'Lexend-Medium',
                    fontSize: scale(14),
                    textAlign: 'center',
                }}
            >
                {'Team Members'}
            </Text>

            {/* More */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ alignItems: 'center', justifyContent: 'center', height: scale(22), width: scale(22) }}
            >
                <Icon
                    color={theme.colors.text}
                    name={'more-outline'}
                    size={scale(22)}
                    style={{ transform: [{ rotate: '90deg' }] }}
                    type={'custom'}
                />
            </TouchableOpacity>
        </View>
    );

    const _renderSearch = () => (
        <View
            style={[
                {
                    alignContent: 'center',
                    backgroundColor: theme.colors.background,
                    borderRadius: 16,
                    flexDirection: 'row',
                    gap: 16,
                    padding: 20,
                },
                GlobalStyles.shadow,
            ]}
        >
            <Icon color={theme.colors.text} name={'search-normal-outline'} size={scale(22)} type={'custom'} />

            <TextInput
                cursorColor={COLORS.primary}
                placeholder={'Search'}
                placeholderTextColor={COLORS.text}
                style={[FONTS.body1, { color: theme.colors.text, flex: 1 }]}
            />
        </View>
    );

    const _renderList = () => (
        <FlatList
            data={dummyData.teamMember}
            keyExtractor={(item) => `TeamMember-${item.id}`}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('TeamMemberDetail')}
                    style={{ flexDirection: 'row', gap: 16 }}
                >
                    {/* Avatar */}
                    <Image
                        source={require('~/assets/images/avatar.png')}
                        resizeMode={'stretch'}
                        style={{ borderRadius: scale(50), height: scale(50), width: scale(50) }}
                    />

                    {/* Name && Email */}
                    <View style={{ flex: 1, justifyContent: 'center', gap: 4 }}>
                        <Text style={[FONTS.h3, { color: theme.colors.text }]}>{item.name}</Text>
                        <Text style={[FONTS.body1, { fontSize: scale(14), color: COLORS.text }]}>{item.email}</Text>
                    </View>

                    {/* More */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            if (ref.current) {
                                ref.current.open();
                            }
                        }}
                        style={{ alignItems: 'center', justifyContent: 'center', height: scale(22), width: scale(22) }}
                    >
                        <Icon
                            color={theme.colors.text}
                            name={'more-outline'}
                            size={scale(22)}
                            style={{ transform: [{ rotate: '90deg' }] }}
                            type={'custom'}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            // eslint-disable-next-line react/no-unstable-nested-components
            ItemSeparatorComponent={() => (
                <View style={{ backgroundColor: theme.colors.border1, height: 1, marginVertical: 16 }} />
            )}
        />
    );

    const _renderModal = () => (
        <RBSheet
            ref={ref}
            height={scale(100) + (insets.bottom === 0 ? 16 : insets.bottom)}
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
            <View style={{ flex: 1, gap: 20, paddingHorizontal: 20, paddingTop: 20 }}>
                {/* Header */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        if (ref.current) {
                            ref.current.close;
                        }
                    }}
                    style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}
                >
                    <Icon color={theme.colors.text} name={'call-calling-outline'} size={scale(22)} type={'custom'} />
                    <Text style={[FONTS.body1, { color: theme.colors.text, fontSize: scale(15) }]}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        if (ref.current) {
                            ref.current.close;
                        }
                    }}
                    style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}
                >
                    <Icon color={COLORS.danger} name={'trash-outline'} size={scale(22)} type={'custom'} />
                    <Text style={[FONTS.body1, { color: COLORS.danger, fontSize: scale(15) }]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </RBSheet>
    );

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme.colors.background,
                flex: 1,
                gap: 30,
                paddingBottom: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50),
                paddingHorizontal: 20,
            }}
        >
            {_renderHeader()}

            {/* Search */}
            {_renderSearch()}

            {/* List */}
            {_renderList()}

            <Button icon={'add-circle-outline'} label={'Add Member'} />

            {/* Model */}
            {_renderModal()}
        </SafeAreaView>
    );
};

export default TeamMember;
