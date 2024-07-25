import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, StatusBar, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';

import { Button } from '~/components';
import { dummyData, COLORS, SIZES, FONTS } from '~/constants';

const OnBoard = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    const ref = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(80)).current;
    const [position, setPostion] = useState(0);

    /* Animated */
    const positionWithOffset = Animated.divide(scrollX, SIZES.width - 40);

    const translateX = scrollX.interpolate({
        inputRange: [0, (SIZES.width - 40) * 3],
        outputRange: [0, -SIZES.width * 3],
        extrapolate: 'clamp',
    });

    /* Functions */
    const nextStep = useCallback(() => {
        if (position === 2) {
            navigation.navigate('Login');
        } else {
            setPostion((prev) => prev + 1);
        }
    }, [navigation, position]);

    /* Hooks */
    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        ref.current?.scrollToIndex({ animated: true, index: position });
    }, [position]);

    /* Renders */
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
            <StatusBar barStyle={'dark-content'} />

            {/* Background */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {dummyData.onBoards.map((onBoard) => (
                    <Animated.View
                        key={`Backdrop-${onBoard.id}`}
                        style={{
                            alignItems: 'center',
                            height: SIZES.height,
                            transform: [{ translateX }],
                            width: SIZES.width,
                        }}
                    >
                        <Image
                            resizeMode={'stretch'}
                            source={theme.dark ? onBoard.imageDark : onBoard.image}
                            style={{ height: '85%', width: SIZES.width - 40 }}
                        />
                    </Animated.View>
                ))}
            </View>

            {/* Information */}
            <Animated.View
                style={{
                    backgroundColor: theme.colors.background,
                    borderRadius: 30,
                    bottom: 0,
                    gap: 20,
                    height: scale(280),
                    left: 0,
                    paddingBottom: insets.bottom === 0 ? 20 : insets.bottom,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    position: 'absolute',
                    transform: [{ translateY }],
                    right: 0,
                }}
            >
                {/* Indicator */}
                <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 5 }}>
                    {dummyData.onBoards.map((_, index) => {
                        const widthAnimated = positionWithOffset.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 50, 10],
                            extrapolate: 'clamp',
                        });
                        const colorAnimated = positionWithOffset.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ['#E7E7E8', COLORS.primary, '#E7E7E8'],
                            extrapolate: 'clamp',
                        });

                        return (
                            <Animated.View
                                key={`Indicator-${index}`}
                                style={{
                                    backgroundColor: colorAnimated,
                                    borderRadius: 10,
                                    height: 5,
                                    width: widthAnimated,
                                }}
                            />
                        );
                    })}
                </View>

                {/* Content */}
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={dummyData.onBoards}
                    decelerationRate={'fast'}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    onScroll={
                        new Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })
                    }
                    ref={ref}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: 'center', gap: 10, width: SIZES.width - 40 }}>
                            {/* Title */}
                            <Text
                                style={[
                                    FONTS.h1,
                                    {
                                        color: theme.colors.text,
                                        textAlign: 'center',
                                    },
                                ]}
                            >
                                {item.title}
                            </Text>

                            {/* Content */}
                            <Text
                                style={[
                                    FONTS.body1,
                                    {
                                        color: '#ACAFB5',
                                        textAlign: 'center',
                                    },
                                ]}
                            >
                                {item.content}
                            </Text>
                        </View>
                    )}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={SIZES.width - 40}
                    style={{ flex: 1 }}
                />

                {/* Button Next Step */}
                <Button label={'Next'} onPress={nextStep} />
            </Animated.View>
        </SafeAreaView>
    );
};

export default OnBoard;
