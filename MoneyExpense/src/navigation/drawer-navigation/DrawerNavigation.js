
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import { COLORS } from '../../styles/theme';
import HomeScreen from '../../screens/HomeScreen';
import MonthlyScreen from '../../screens/MonthlyScreen';
import AddExpenseScreen from '../../screens/AddExpenseScreen';
import WeeklyScreen from '../../screens/WeeklyScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.whitePure,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} initialRouteName="home">
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Add Expense' component={AddExpenseScreen} />
                <Drawer.Screen name='Monthly Expense' component={MonthlyScreen} />
                <Drawer.Screen name='Weekly Expense' component={WeeklyScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;