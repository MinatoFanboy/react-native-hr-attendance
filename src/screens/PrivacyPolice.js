import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import { Header } from '~/components';
import { COLORS, FONTS } from '~/constants';
import { scale } from 'react-native-size-matters';

const PrivacyPolice = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, paddingHorizontal: 20 }}>
            <Header header={'Privacy Police'} onPress={() => navigation.goBack()} />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, gap: 24 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 16 }}
            >
                <View style={{ gap: 20 }}>
                    <Text style={[FONTS.body2, { color: COLORS.text }]}>Last update: 05/02/2023</Text>
                    <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                        Please read these privacy police, carefully before using our app operated by us.
                    </Text>
                </View>
                <View style={{ gap: 20 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Lexend-Bold', fontSize: scale(17) }}>
                        Privacy Police
                    </Text>
                    <View>
                        <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                            There are many variations of passages of Lorem Ipsum avaiable, but the majority have
                            suffered alteration in som form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text.
                        </Text>
                        <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                            necessary, making this the first true generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable.
                        </Text>
                        <Text style={[FONTS.body1, { color: theme.colors.text }]}>
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                            non-characteristic words etc.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolice;
