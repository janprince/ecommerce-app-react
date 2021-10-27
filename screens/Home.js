import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from "../utilities/Colors";



export default function Home() {
  const brands = ["Nike", "Puma", "Adidas", "New Balance"];
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
        <View style={{flex: 1}}>
          <Ionicons name="options" size={24} color="black" />
        </View>
        <View style={{flex: 1}}>
          <Ionicons name="notifications" size={24} color="black" style={{alignSelf: 'flex-end'}}/>
        </View>
      </View>

      <View style={{marginVertical: 15,}}>
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 5}}>
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

        
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 12,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-1.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
                <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
              </View>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-5.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-2.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-6.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-8.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-2.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-2.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

          <View style={styles.product}>
            <FontAwesome5 name="bookmark" size={22} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 15, marginTop: 8}} />
            <Image source={require("../assets/product-images/test/pd-3.png")} style={{width: 160, height: 85, marginBottom: 15}}/>
            <Text style={{color: Colors.titleColor, fontSize: 14, fontWeight: 'bold'}}>Air Zoom Pegasus</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>$135</Text>
              <Text style={{color: Colors.textSecondary, fontSize: 12, fontWeight: 'bold' }}>.00</Text>
            </View>
          </View>

        

        </View>
      </ScrollView>

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
  }
});
