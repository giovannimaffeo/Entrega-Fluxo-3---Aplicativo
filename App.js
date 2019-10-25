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

//Ver se ta importado certo
import Post from './Post'
import BarraSuperior from './BarraSuperior'
import BarraInferior from './BarraInferior'

let pic = {
  uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F1472772%2F17102%2Fi%2F1600%2Fdepositphotos_171021614-stock-photo-cool-emoji-isolated-on-white.jpg&imgrefurl=https%3A%2F%2Fbr.depositphotos.com%2F171021614%2Fstock-photo-cool-emoji-isolated-on-white.html&docid=kWdOSvvqXhh73M&tbnid=1tk-ZJ3lNtFCiM%3A&vet=10ahUKEwiVuefX96_lAhULq1kKHc5tCjEQMwhFKAAwAA..i&w=1600&h=1700&bih=983&biw=1920&q=imagem%20legal&ved=0ahUKEwiVuefX96_lAhULq1kKHc5tCjEQMwhFKAAwAA&iact=mrc&uact=8'
}

let pic2 = {
  uri: 'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'
}

let texto = 
  "Sorry to everyone about the @rockinrio livestream. The weather was unpredictable as it was pouring when I went on stage and we were unsure about the outcome of the show. My apologies on behalf of Mother Nature...I’ll be back for more!!"


 export default function App(){
  return(



    //style = {styles.tela}

    <View style = {styles.tela}>

      <View style = {styles.barraSuperior} >

        <BarraSuperior fotoPerfilUsuario={pic} nomeUsuario="Neymar Júnior" userNameUsuario="NeymarJr" />
        

      </View>
     
      <View style = {styles.feed} >

        <ScrollView>

        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
        <Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" texto={texto} />
          
          






        </ScrollView>  
        
      </View>    
    
      <View style = {styles.barraInferior} >

        
        <BarraInferior nomeAplicativo="Nome do Aplicativo"/>
       

      </View>
    
    </View>
  
  );
}

const styles = StyleSheet.create({

  tela: {
    flex: 1,
    flexDirection: "column",
  
  },

  barraSuperior: {

    height: "15%",
    backgroundColor: "#131D53",

  },

  feed: {

    height: "77%",
    backgroundColor: "#0f1741",

  },

  barraInferior: {

    height: "8%",
    backgroundColor: "#131D53",

  },

})

/* 
8899A6

<BarraSuperior nomeUsuario={'Neymar Júnior'} userNameUsuario={'NeymarJr'} fotoPerfilUsuario={ 'https://pbs.twimg.com/profile_images/1024824376406024192/XWNBgfCX_400x400.jpg'} />
        


<Post nomeCompleto="Drake" userName="Drizzy" fotoPerfil="pic2" />


<Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>
          <Post nomeCompleto={'Drake'} userName={'Drizzy'} fotoPerfil={'https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png'}/>



          <BarraInferior nomeAplicativo={'Nome do Aplicativo'}/>
*/