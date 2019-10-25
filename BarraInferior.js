/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function Inferior(props){
    return(
        
        <View style={styles.barraInferior}>

            <View style={styles.nomeAplicativo}>

                <Text style={styles.textoNome}>
                    {props.nomeAplicativo}
                </Text>

            </View>

            <View style={styles.botaoPost}>

                <Button title="Postar" />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    barraInferior: {
      
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 5,
    
    },
  
    nomeAplicativo: {
        //Ver fonte
      width: "70%",
      color: "#131D53",
  
    },

    textoNome: {

      color: "#D9D9D9",
      fontSize:30,
    },
  
    botaoPost: {

      width: "27%",
      padding: 15,
      borderRadius:20,
  
    },

})
  
































































































































































