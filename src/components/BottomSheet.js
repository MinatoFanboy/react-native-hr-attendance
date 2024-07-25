import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

const { height: SCREEN_HEIGHT, width } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BlurViewAnimated = Animated.createAnimatedComponent(BlurView);

const BottomSheet = forwardRef(({ autoClose = true, children, containerStyle, maxHeight }, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback(
        (destination) => {
            'worklet';
            active.value = destination !== 0;

            translateY.value = withTiming(destination);
        },
        [active, translateY],
    );

    const onClose = useCallback(
        () => (fn) => {
            'worklet';
            active.value = false;

            translateY.value = withTiming(0, {}, () => {
                runOnJS(fn)();
            });
        },
        [active, translateY],
    );

    const isActive = useCallback(() => {
        return active.value;
    }, [active]);

    useImperativeHandle(ref, () => ({ isActive, onClose, scrollTo }), [isActive, onClose, scrollTo]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -maxHeight);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 1.5) {
                scrollTo(0);
            } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                scrollTo(MAX_TRANSLATE_Y);
            }
        });

    const rBackdropStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(active.value ? 1 : 0),
        };
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP,
        );

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <>
            <BlurViewAnimated
                blurType={'light'}
                onTouchStart={() => {
                    if (autoClose) {
                        scrollTo(0);
                    }
                }}
                style={[
                    {
                        ...StyleSheet.absoluteFillObject,
                    },
                    rBackdropStyle,
                    { zIndex: 99999999999999 },
                ]}
            />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle, containerStyle]}>
                    <View style={styles.line} />
                    {children}
                </Animated.View>
            </GestureDetector>
        </>
    );
});

const styles = StyleSheet.create({
    bottomSheetContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: SCREEN_HEIGHT / 2,
        position: 'absolute',
        top: SCREEN_HEIGHT,
        width,
        zIndex: 99999999999999,
    },
    line: {
        width: 60,
        height: 4,
        backgroundColor: '#E7E7E8',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
});

export default BottomSheet;
