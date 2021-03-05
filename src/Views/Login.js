
import TextCenter from "../components/TextCenter";

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {CardImg} from 'reactstrap';




import Button from '../components/Button'

const Login = (props) => {
  return (
   
      <View style={estilos.container}>
     
     <CardImg  top  width="20%"  src={require('../../assets/logo.png')} alt="Card image cap" />
  
     <TextInput 
      placeholder="Digite seu email"
      style={estilos.input}
     />
 
     <TextInput 
      style={estilos.input}
      placeholder="Digite sua senha"
     />
 
     <TouchableOpacity
     style={estilos.botalogin1}
       onPress={() => {this.props.navigation.navigate('Home')}}
     >
       <Text style={estilos.botalogin2}>Login</Text>
     </TouchableOpacity>
 
          
    </View>
  );
};

export default Login;


const estilos = StyleSheet.create({
  container: {
      flex: 1, 
      //FlexDirectin: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
      
  },
  /* logo: {
      whith : 150,
      height: 150,
      borderTopEndRadius: 100
  }, */
  input:{
      margin: 10,
      width: 300,
      padding:10,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderTopEndRadius: 3       
  },
  botalogin1:{
    width: 300,
    height: 42,
    backgroundColor:'#3498db',
    marginTop: 10,
    borderTopEndRadius:4,
    justifyContent: 'center',
      alignItems: 'center',
    
  },
  botalogin2:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }

  
});


