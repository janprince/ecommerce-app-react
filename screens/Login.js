import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from "../utilities/Colors";

export default function Login({navigation}) {
  const login_images = [require("../assets/login/sneaker_2.jpg")];
  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={{alignItems: 'center'}}>
        <Image source={require("../assets/icons/sneaker-icon.png")} style={{
          width: 65, 
          height: 65, 
          marginTop: 10,
          transform: [{rotate: '20deg'}],
        }}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor}}>TheSneakerStore</Text>
      </View>

      {/* Login__Images */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 30,}}>
        <Image source={require("../assets/login/sneaker_2.jpg")} style={styles.login_images}/>
        <Image source={require("../assets/login/sneaker_4.jpg")} style={styles.login_images}/>
        <Image source={require("../assets/login/sneaker_3.jpg")} style={styles.login_images}/>
      </ScrollView>

      
      {/* Social-media logins */}
      <View style={{marginBottom: 25,justifyContent: 'space-between'}}>

        {/* line */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold', color: Colors.titleColor, fontSize: 17, marginHorizontal: 10}}>Login</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        {/* login with google */}
        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/google.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/facebook.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/apple-1.png")} style={{width: 20, height: 20, marginRight: 25}}/>
          <Text>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{
              textDecorationLine: 'underline',
              marginLeft: 10, 
              color: Colors.primary, 
              fontWeight: 'bold',
            }} onPress={() => {navigation.navigate("Sign Up");}}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 35,
  },

  social_buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: Colors.brown,
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: 'center'
  },

  login_fields: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.brown,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  login_images: {
    width: 280,
    height: 380,
    borderRadius: 15,
    marginRight: 10,
  }
});
