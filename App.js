import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Tabs from './navigation/Tabs';

export default function App() {
    const stack = createNativeStackNavigator();
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <stack.Navigator initialRouteName="Login">
                    <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
                    <stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
                    <stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
                    <stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}}/>

                    {/* Bottom Navigation */}
                    <stack.Screen name="Main" component={Tabs} options={{headerShown: false}}/>
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


