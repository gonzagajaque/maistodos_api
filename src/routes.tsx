import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import BalanceScreen from './screens/BalanceScreen';

const Stack = createStackNavigator();

function Routes() {
    const [initialRouteName] = useState('Login');

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                <Stack.Screen name="Login" component={LoginScreen} options={
                    {
                        headerShown: false,
                    }} />
                <Stack.Screen name="Balance" component={BalanceScreen} options={
                    {
                        headerShown: false,
                    }
                }/>

                <Stack.Screen name="Transactions" component={BalanceScreen} options={
                    {
                        headerShown: false,
                    }
                }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes