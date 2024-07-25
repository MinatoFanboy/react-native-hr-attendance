import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Note, Profile, TeamMember, Vacation } from '~/screens';
import MyTabBar from './tabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const getTabBar = (props) => <MyTabBar {...props} />;

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => getTabBar(props)}>
            <Tab.Screen component={Home} name={'Home'} />
            <Tab.Screen component={Note} name={'Note'} />
            <Tab.Screen component={TeamMember} name={'TeamMember'} options={{ tabBarButton: true }} />
            <Tab.Screen component={Vacation} name={'Vacation'} />
            <Tab.Screen component={Profile} name={'Profile'} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
