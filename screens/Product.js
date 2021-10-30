import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Colors from "../utilities/Colors";



export default function Product({navigation}) {
  const [currentShot, selectShot] = useState(0);   // state to handle which brand's shoes are diplayed
  const pd_shots = [
    require("../assets/product-images/test/pd-1.png"),
    require("../assets/product-images/test/pd-2.png"),
    require("../assets/product-images/test/pd-5.png"),
  ]

  return (
    <SafeAreaView style={{marginTop: 15, flex: 1, backgroundColor: Colors.background}}>

      <View style={styles.container}>

          {/* Product top-nav */}
          <View style={{
              flexDirection: 'row',
              marginTop: 10,
          }}>
              <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Home")}}>
              <Ionicons name="chevron-back" size={24} color={Colors.titleColor} />
              </TouchableOpacity>

              <View style={{flex: 1}}>
              <Text style={{color: Colors.titleColor, fontWeight:'bold'}}>Product Details</Text>
              </View>

              <View style={{flex: 1}}>
                  <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} />
              </View>
          </View>

          

          <View style={{marginTop: 30,}}>
              <Text style={{fontSize: 15.5, color: Colors.textPrimary}}>Men's Shoe</Text>
              <Text style={{fontSize: 21, fontWeight: 'bold', color: Colors.titleColor, marginTop: 5}}>Nike Air Jordan X</Text>
              <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                  <Ionicons name="star" size={20} color={Colors.primary} />
                  <Text> 4.9 </Text>
                  <Text style={{color: Colors.textPrimary}}>(120 Reviews)</Text>
              </View>
          </View>

          {/* Handles various product shots */}
          <ProductShots selectedShot={currentShot} selectShot={selectShot} navigation={navigation} shots={pd_shots}/>
      </View>
      

      {/* Product details */}
      <View style={{
          flex: 1, 
          backgroundColor: "#fff", 
          marginTop: 30, 
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          paddingHorizontal: 22,
          paddingTop: 20
          }}>

        {/* Product Colors */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20,}}>
          <Text style={{marginRight: 20, fontWeight: 'bold', color: Colors.titleColor, fontSize: 16}}>Color</Text>
          <FontAwesome name="circle" size={24} color="black" style={{marginRight: 10,}}/>
          <FontAwesome name="circle" size={24} color={Colors.primary} style={{marginRight: 10,}}/>
          <FontAwesome name="circle" size={24} color="red" style={{marginRight: 10,}}/>
        </View>

        {/* Product description */}
        <View>
          <Text style={{color: Colors.titleColor, fontWeight:'bold', fontSize: 18, marginBottom: 10}}>Description</Text>
          <Text style={{color: Colors.textPrimary}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
            iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  
            <Text style={{ color: Colors.primary, fontWeight: 'bold'}}> Read more. </Text>
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: Colors.titleColor, fontWeight:'bold', fontSize: 18, flex: 1}}>Size</Text>
            
            <View style={{flex: 1, }}>
              <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: Colors.textPrimary}}>UK</Text>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: Colors.textPrimary}}>US</Text>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: 'black'}}>EU</Text>
              </View>
            </View>

          </View>

          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <TouchableOpacity style={styles.sizes}>
              <Text>40</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>41</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>42</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>43</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{
            backgroundColor: Colors.primary, 
            alignItems: 'center',
            paddingVertical: 15,
            marginHorizontal: 25,
            marginVertical: 20,
            borderRadius: 15
            }} onPress={() => navigation.navigate("Cart")}>
            <Text style={{color: "#fff"}}>Add to Cart</Text>
          </TouchableOpacity>

        </View>


      </View>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    backgroundColor: Colors.background,
  },
  product_shots: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.textSecondary
  },
  selected_shot: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  sizes: {
    padding: 15, 
    borderWidth: 1, 
    borderRadius: 15, 
    marginRight: 15, 
    borderColor: Colors.textPrimary
  }
});

const ProductShots = ({
    shots,
    selectedShot,
    selectShot,
    navigation,
  }) => (
    <View style={{flexDirection: 'row'}}>
      <Image source={shots[selectedShot]} style={{width: 300, height: 200}}/>

      <View style={{justifyContent: 'flex-end'}}>
        {/* Product shots */}
          {
              shots.map((shot, index) => {
                  return(
                    <TouchableOpacity style={[styles.product_shots, selectedShot == index && styles.selected_shot]} key={shot} onPress={() => selectShot(index)}>
                        <Image source={shot} style={{width: 40, height: 23}}/>
                    </TouchableOpacity>
                  );
              })
          }

      </View>

    </View>
  );