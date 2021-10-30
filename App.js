import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Product from './screens/Product';

export default function App() {
    const stack = createNativeStackNavigator();
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <stack.Navigator>
                    <stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                    <stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
                    <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
                </stack.Navigator>

            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


