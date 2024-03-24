import { Component } from "react";
import React  from "react";
import { View, Text, StyleSheet } from "react-native";


class Pessoas extends Component{
    render(){
      return(
         <View style={styles.container}>
          
          <Text style={styles.text}>Nome: {this.props.data.nome}</Text>
          <Text style={styles.text}>Idade: {this.props.data.idade}</Text>
          <Text style={styles.text}>Email: {this.props.data.email}</Text>
  
         </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#272',
        height: 150,
        marginBottom: 20,
        padding: 15,
    },
    text:{
        color: 'black',
        alignItems:'center',
        fontSize: 16,
    },
  }) 

  export default Pessoas;