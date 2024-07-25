import React, { memo, useCallback, useEffect, useState } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';

import Icon from './Icon';
import { COLORS, FONTS, SIZES } from '~/constants';

const Swipe = () => {
    const [background, setBackground] = useState(COLORS.primary);
    const [state, setState] = useState(false);
    const [text, setText] = useState('Swipe to Check In');

    const X = useSharedValue(10);
    const Y = useSharedValue(200);

    const backHandler = () => {
        setState((prev) => !prev);
    };

    const changeState = useCallback(() => {
        setText(state ? 'Swipe to Check Out' : 'Swipe to Check In');
        setBackground(state ? COLORS.danger : COLORS.primary);
        X.value = 0;
        Y.value = withSpring(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    const animatedGestuHandler = useAnimatedGestureHandler({
        onActive: (e) => {
            if (e.translationX < 0) {
                X.value = -e.translationX;
            } else {
                X.value = e.translationX;
            }
        },
        onEnd: () => {
            if (X.value < SIZES.width / 2 - 50) {
                X.value = withSpring(10);
            } else {
                X.value = withSpring(SIZES.width - 105, {}, () => {
                    runOnJS(backHandler)();
                });
            }
        },
    });

    useEffect(() => {
        Y.value = withSpring(200, {}, () => {
            runOnJS(changeState)();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    const animatedStyles = {
        textStyle: useAnimatedStyle(() => {
            return { opacity: interpolate(X.value, [0, SIZES.width / 2 - 50], [1, 0.5]) };
        }),
        containerStyle: useAnimatedStyle(() => {
            return { transform: [{ translateY: Y.value }] };
        }),
        swipeStyle: useAnimatedStyle(() => {
            return { transform: [{ translateX: X.value }] };
        }),
    };

    return (
        <Animated.View
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: background,
                    borderRadius: 12,
                    bottom: scale(100),
                    justifyContent: 'center',
                    height: 70,
                    left: 20,
                    paddingHorizontal: 10,
                    position: 'absolute',
                    width: SIZES.width - 40,
                },
                animatedStyles.containerStyle,
            ]}
        >
            <PanGestureHandler onGestureEvent={animatedGestuHandler}>
                <Animated.View
                    style={[
                        {
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 10,
                            justifyContent: 'center',
                            height: 45,
                            left: 10,
                            position: 'absolute',
                            width: 45,
                        },
                        animatedStyles.swipeStyle,
                    ]}
                >
                    <Icon color={background} name={'arrow-right'} size={24} type={'custom'} />
                </Animated.View>
            </PanGestureHandler>
            <Animated.Text style={[FONTS.body1, { color: 'white' }, animatedStyles.textStyle]}>{text}</Animated.Text>
        </Animated.View>
    );
};

export default memo(Swipe);
