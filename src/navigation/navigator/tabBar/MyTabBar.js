import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import TabShape from './TabShape';
import { COLORS, SIZES } from '~/constants';
import { Icon } from '~/components';

const TabBarButton = () => {
    return (
        <View style={styles.container}>
            <Icon color={'white'} name={'profile-group-outline'} size={scale(22)} type={'custom'} />
        </View>
    );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <View style={[styles.myTabBarContainer, { height: (insets.bottom === 0 ? 20 : insets.bottom) + scale(50) }]}>
            <TabShape height={(insets.bottom === 0 ? 20 : insets.bottom) + scale(50)} />
            <View style={StyleSheet.absoluteFill}>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                accessibilityRole={'button'}
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                activeOpacity={0.7}
                                key={index}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.button}
                                testID={options.tabBarTestID}
                            >
                                {options.tabBarButton ? (
                                    <TabBarButton />
                                ) : (
                                    <>
                                        {route.name === 'Home' && (
                                            <Icon
                                                color={isFocused ? COLORS.primary : theme.colors.text}
                                                name={'home-outline'}
                                                size={scale(22)}
                                                type={'custom'}
                                            />
                                        )}
                                        {route.name === 'Note' && (
                                            <Icon
                                                color={isFocused ? COLORS.primary : theme.colors.text}
                                                name={'note-outline'}
                                                size={scale(22)}
                                                type={'custom'}
                                            />
                                        )}
                                        {route.name === 'Vacation' && (
                                            <Icon
                                                color={isFocused ? COLORS.primary : theme.colors.text}
                                                name={'holiday-outline'}
                                                size={scale(22)}
                                                type={'custom'}
                                            />
                                        )}
                                        {route.name === 'Profile' && (
                                            <Icon
                                                color={isFocused ? COLORS.primary : theme.colors.text}
                                                name={'profile-outline'}
                                                size={scale(22)}
                                                type={'custom'}
                                            />
                                        )}
                                    </>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flex: 1,
        paddingBottom: 20,
    },
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 999,
        bottom: scale(12),
        justifyContent: 'center',
        height: scale(52),
        position: 'absolute',
        width: scale(52),
    },
    inactiveLabel: {
        color: 'gray',
        fontWeight: 'bold',
    },
    label: {
        color: 'purple',
        fontWeight: 'bold',
    },
    myTabBarContainer: {
        bottom: 0,
        position: 'absolute',
        width: SIZES.width,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        elevation: 20,
        borderTopLeftRadius: 30,
    },
});

export default MyTabBar;
