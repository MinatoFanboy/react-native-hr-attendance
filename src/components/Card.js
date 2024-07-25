import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { differenceInDays, format } from 'date-fns';
import { scale } from 'react-native-size-matters';

import { COLORS, FONTS } from '~/constants';
import GlobalStyles from '~/styles';

const Card = ({ item }) => {
    const theme = useTheme();

    return (
        <View
            style={[
                {
                    backgroundColor: theme.colors.card,
                    borderColor: theme.colors.border,
                    borderRadius: 16,
                    borderWidth: 1,
                    gap: 12,
                    padding: 16,
                },
                GlobalStyles.shadow,
            ]}
        >
            {/* Date && Status */}
            <View
                style={{
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 16,
                }}
            >
                {/* Date */}
                <View style={{ gap: 5 }}>
                    <Text style={[FONTS.body2, { color: theme.colors.text }]}>Date</Text>
                    <Text style={[FONTS.body1, { color: theme.colors.text, fontFamily: 'Lexend-Medium' }]}>
                        {`${format(item.dateStart, 'MMM dd, yyyy')} - ${format(item.dateEnd, 'MMM dd, yyyy')}`}
                    </Text>
                </View>

                {/* Status */}
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor:
                            item.status === 'Rejected'
                                ? theme.colors.dangerTransparent
                                : theme.colors.successTransparent,
                        borderRadius: 8,
                        justifyContent: 'center',
                        paddingHorizontal: 8,
                        paddingVertical: 5,
                    }}
                >
                    <Text
                        style={{
                            color: item.status === 'Rejected' ? COLORS.danger : COLORS.success,
                            fontFamily: 'Colaborate-Regular',
                            fontSize: scale(12),
                        }}
                    >
                        {item.status}
                    </Text>
                </View>
            </View>

            {/* Separate */}
            <View style={{ backgroundColor: COLORS.text, height: 1 }} />

            {/* Apply Days, Leave Balance && Approved By */}
            <View style={{ flexDirection: 'row' }}>
                {/* Apply Days */}
                <View style={{ flex: 1, gap: 5 }}>
                    <Text style={[FONTS.body2, { color: theme.colors.text }]}>Apply Days</Text>
                    <Text style={[FONTS.body1, { fontFamily: 'Lexend-Medium', color: theme.colors.text }]}>
                        {differenceInDays(item.dateEnd, item.dateStart)}
                    </Text>
                </View>

                {/* Leave Balance */}
                <View style={{ flex: 1, gap: 5 }}>
                    <Text style={[FONTS.body2, { color: theme.colors.text }]}>Leave Balance</Text>
                    <Text style={[FONTS.body1, { fontFamily: 'Lexend-Medium', color: theme.colors.text }]}>
                        {item.leaveBalance}
                    </Text>
                </View>

                {/* Approved By */}
                <View style={{ flex: 1, gap: 5 }}>
                    <Text style={[FONTS.body2, { color: theme.colors.text }]}>Approved By</Text>
                    <Text style={[FONTS.body1, { fontFamily: 'Lexend-Medium', color: theme.colors.text }]}>
                        {item.approvedBy}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default memo(Card);
