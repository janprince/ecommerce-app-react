import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import Colors from "../utilities/Colors";



export default function Home() {
  const brands = ["Nike", "Puma", "Adidas", "New Balance"];
  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <View style={{flex: 1}}>
          <Ionicons name="options" size={24} color="black" />
        </View>
        <View style={{flex: 1}}>
          <Ionicons name="notifications" size={24} color="black" style={{alignSelf: 'flex-end'}}/>
        </View>
      </View>

      <View style={{marginVertical: 20,}}>
        <Text style={{fontSize: 21, fontWeight: "bold", color: Colors.titleColor}}>Perfect Shoes</Text>
        <Text style={{fontSize: 15.5, fontStyle: 'italic', color: Colors.titleColor}}>For perfect style</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>

        {/* search bar */}
        <View style={{
          flex: 4,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: "#fff",
          padding: 10,
          marginRight: 30,
          borderRadius: 12,
          }}>
          <Feather name="search" size={24} color="black" style={{paddingHorizontal: 10,}} />
          <TextInput placeholder="search" style={{marginRight:40}}/>
        </View>

        {/* filter  icon */}
        <View style={{
          // flex: 1, 
          flexDirection: 'row', 
          justifyContent:'flex-end',
          backgroundColor: Colors.primary,
          padding: 10,
          borderRadius: 12,
          }}>
          <Ionicons name="ios-options-sharp" size={24} color="white" />
        </View>
      </View>

      {/* shoe brands */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15,}}>
        {
          brands.map(brand => {
            return(
              <TouchableOpacity  key={brand} style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
                <Text>{brand}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
});
