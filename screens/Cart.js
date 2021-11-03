import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from "../utilities/Colors";



export default function Cart({navigation}) {
  const [brand, setBrand] = useState("Nike");   // state to handle which brand's shoes are diplayed
  const pds = [
    require("../assets/product-images/test/pd-1.png"),
    require("../assets/product-images/test/pd-2.png"),
    require("../assets/product-images/test/pd-3.png"),
    require("../assets/product-images/test/pd-4.png"),
    require("../assets/product-images/test/pd-5.png"),
  ]

  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Home")}}>
        <Ionicons name="chevron-back" size={24} color={Colors.titleColor} />
        </TouchableOpacity>

        <View style={{flex: 1}}>
        <Text style={{color: Colors.titleColor, fontWeight:'bold', alignSelf: 'center'}}>Cart</Text>
        </View>

        <View style={{flex: 1}}>
            <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} />
        </View>
      </View>

      {/* cart items*/}
      <View style={{marginTop: 20}}>

        
        <View style={{flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 15, marginVertical:7}}>
          <View style={{backgroundColor: Colors.background, padding: 15, borderRadius: 15, marginRight: 10}}>
            <Image source={require("../assets/product-images/test/pd-4.png")} style={{width: 80, height: 50}}/>
          </View>

          <View style={{flex: 1}}>
            <Text style={{fontWeight: '700', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>Nike Air Jordan X</Text>
            <Text style={{color: Colors.textPrimary, marginBottom: 5}}>Men's Shoe</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>

              <View style={{flexDirection: 'row', flex: 3, alignItems: 'baseline'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>$120</Text>
                <Text>.00</Text>
              </View>

              <View style={{alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: Colors.background, marginLeft: 15}}>
                <View style={{backgroundColor: '#fff', paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                  <Text style={{fontSize: 17, color: Colors.titleColor}}>-</Text>
                </View>
                <Text style={{fontWeight: 'bold', marginHorizontal: 2}}>1</Text>
                <View style={{backgroundColor: Colors.primary, paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                  <Text style={{fontSize: 17, color: "#fff"}}>+</Text>
                </View>
              </View>

            </View>
          </View>

        </View>

        <View style={{flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 15, marginVertical:10}}>
          <View style={{backgroundColor: Colors.background, padding: 15, borderRadius: 15, marginRight: 10}}>
            <Image source={require("../assets/product-images/test/pd-4.png")} style={{width: 80, height: 50}}/>
          </View>

          <View style={{flex: 1}}>
            <Text style={{fontWeight: '700', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>Nike Air Jordan X</Text>
            <Text style={{color: Colors.textPrimary, marginBottom: 5}}>Men's Shoe</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>

              <View style={{flexDirection: 'row', flex: 3, alignItems: 'baseline'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>$120</Text>
                <Text>.00</Text>
              </View>

              <View style={{alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: Colors.background, marginLeft: 15}}>
                <View style={{backgroundColor: '#fff', paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                  <Text style={{fontSize: 17, color: Colors.titleColor}}>-</Text>
                </View>
                <Text style={{fontWeight: 'bold', marginHorizontal: 2}}>1</Text>
                <View style={{backgroundColor: Colors.primary, paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                  <Text style={{fontSize: 17, color: "#fff"}}>+</Text>
                </View>
              </View>

            </View>
          </View>

        </View>

      </View>

      
      <View style={{marginTop: 50}}>

        {/* Total amount */}
        <View style={{flexDirection: 'row', }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1}}>Total</Text>
          <View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>
              $385<Text style={{fontSize: 15, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>.00</Text>
            </Text>
          </View>
        </View>

        {/* Checkout button */}
        <TouchableOpacity style={{
            backgroundColor: Colors.primary, 
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 0,
            marginVertical: 20,
            borderRadius: 15
            }} onPress={() => navigation.navigate("Checkout")}>
            <Text style={{color: "#fff"}}>Checkout</Text>
          </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
});

