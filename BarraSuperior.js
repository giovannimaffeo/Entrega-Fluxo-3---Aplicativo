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
  Image,
  Text,
  StatusBar,
} from 'react-native';

let pic = {
  url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F1472772%2F17102%2Fi%2F1600%2Fdepositphotos_171021614-stock-photo-cool-emoji-isolated-on-white.jpg&imgrefurl=https%3A%2F%2Fbr.depositphotos.com%2F171021614%2Fstock-photo-cool-emoji-isolated-on-white.html&docid=kWdOSvvqXhh73M&tbnid=1tk-ZJ3lNtFCiM%3A&vet=10ahUKEwiVuefX96_lAhULq1kKHc5tCjEQMwhFKAAwAA..i&w=1600&h=1700&bih=983&biw=1920&q=imagem%20legal&ved=0ahUKEwiVuefX96_lAhULq1kKHc5tCjEQMwhFKAAwAA&iact=mrc&uact=8'
}

export default function BarraSuperior(props){
    return(

        <View style={styles.identificacaoCompletaUsuario}>

            <View style={styles.fotoPerfilUsuario}>

                
              <Image 
              style={{marginLeft: 35, width: 60, height: 60}}
              source = {{ uri: 'https://pbs.twimg.com/profile_images/1024824376406024192/XWNBgfCX_400x400.jpg'}} />

            </View>

            <View style={styles.identificacaoUsuario}>

                
                  <View >
                  
                    <Text style={styles.letras}>
                      {props.nomeUsuario} 
                    </Text>
                  
                  </View> 
                  
                  <View> 
                    
                    <Text style={styles.letras}>
                      @{props.userNameUsuario}
                    </Text>

                  </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    identificacaoCompletaUsuario: {
      
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    
    },
  
    fotoPerfilUsuario: {
  
      width: "35%",
  
    },
  
    identificacaoUsuario: {
  
      width: "60%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      justifyContent: "space-around",
      alignItems: "center",

  
    },

    letras: {

      fontFamily: "Heuvetica Neuer",
      fontWeight: "bold",
      fontSize: 20,
      color: "#D9D9D9"
    }

})
  











































































































































































































































































































































































































