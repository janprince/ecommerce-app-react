import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation, Ionicons } from '@expo/vector-icons';
import React from 'react';
import Home from "../screens/Home";
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#FA6401"}}>

          {/* Home Screen */}
          <Tab.Screen name="Home" component={Home} options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                  <Foundation name="home" size={size} color={color} />
              ),
          }} />

          {/* Profile Screen */}
          <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person" size={size} color={color} />
              ),
          }}/>

        </Tab.Navigator>
    );
}

export default Tabs;