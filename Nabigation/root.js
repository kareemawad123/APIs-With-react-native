import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import Users from '../Screens/Users';
import routes from '../common/routes';
import UserDetails from '../Screens/UserDetails';
const stack = createNativeStackNavigator();
const Root = () => {
    return (
        <stack.Navigator>
            <stack.Screen name={routes.home} component={Home} options={{
                headerTitle:'Home Screen',
                headerTitleAlign: 'center',
            }}></stack.Screen>
            <stack.Screen name={routes.users} component={Users} options={{
                headerTitle:'Users Screen',
                headerTitleAlign: 'center',
            }}></stack.Screen>
            <stack.Screen name={routes.userDetails} component={UserDetails} options={{
                headerTitle:'User Details Screen',
                headerTitleAlign: 'center',
            }}></stack.Screen>
        </stack.Navigator>

    );
}

const styles = StyleSheet.create({})

export default Root;
