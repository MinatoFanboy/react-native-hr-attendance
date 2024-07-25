import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { Header } from '~/components';
import { COLORS, FONTS } from '~/constants';

const TermsAndConditions = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Terms & Condititions'} onPress={() => navigation.goBack()} />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, gap: 24 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 16 }}
            >
                <View style={{ gap: 20 }}>
                    <Text style={[FONTS.body2, { color: COLORS.text }]}>Last update: 05/02/2023</Text>
                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                        Please read these terms of services, carefully before using our app operated by us.
                    </Text>
                </View>
                <View style={{ gap: 20 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Lexend-Bold', fontSize: scale(17) }}>
                        Condititions of Uses
                    </Text>
                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                        It is a long established fact that a reader with be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Loren Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        the infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TermsAndConditions;
