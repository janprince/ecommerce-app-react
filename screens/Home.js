import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from "../utilities/Colors";
import Products from '../utilities/database'; 



export default function Home({navigation}) {
  const [brand, setBrand] = useState("Nike");   // state to handle which brand's shoes are diplayed

  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="options" size={24} color={Colors.titleColor} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart" size={24} color={Colors.titleColor} style={{alignSelf: 'flex-end'}}/>
        </TouchableOpacity>
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

      {/* Product listings based on categories */}
      <ProductList values={["Nike", "Puma", "Adidas", "New Balance"]} selectedBrand={brand} setSelectedBrand={setBrand} navigation={navigation} products={Products}/>

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
  product: {
    backgroundColor: '#fff', 
    paddingHorizontal: 7,
    paddingVertical: 18, 
    borderRadius: 15,
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 3,
    //   height: 2,
    // },
    // shadowOpacity: 1.25,
    // shadowRadius: 0.84,
    elevation: 1,
  },

  brandButtons: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  selectedBrandButton: {
    backgroundColor: Colors.primary,
  },
  brandLabel: {
    color: "black",
  },
  selectedBrandLabel: {
    color: "#fff",
  }
});


const ProductList = ({
  values,
  products,
  selectedBrand,
  setSelectedBrand,
  navigation,
}) => (
  <View>

    {/* shoe brands */}
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 5}}>
      {
        values.map(value => {
          return(
            <TouchableOpacity  key={value} style={[styles.brandButtons, selectedBrand == value && styles.selectedBrandButton]} onPress={() => setSelectedBrand(value)}>
              <Text style={[styles.brandLabel, selectedBrand == value && styles.selectedBrandLabel]}>{value}</Text>
            </TouchableOpacity>
          );
        })
      }
    </View>

    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 20}}>
      <View style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 12,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        
        {
          products.map((product, index) => {
            if (product.type == selectedBrand){
              return(
                <TouchableOpacity key={product.name} style={styles.product} onPress={() => {navigation.navigate('Product', {index: index})}} >
                  <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
                  <Image source={product.images[0]} style={{width: 160, height: 85, marginBottom: 15}}/>
                  <View style={{paddingLeft: 10}}>
                    <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>{product.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                      <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>${product.price}</Text>
                      <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          })
        }    

      </View>
    </ScrollView>

  </View>

);
