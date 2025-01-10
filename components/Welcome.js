import * as React from 'react';
import {View, Text } from 'react-native';

export default function WelcomeScreen(){
    return (
       <View style={{ flex : 1}}>
         <Text
           style={{
              padding: 40,
              fontSize : 30,
              color : '#EDEFEE',
              textAlign : 'center',
           }}
         >
              welcome to Petit Coeur Technologie
         </Text>
         <Text
          style = {{
             fontSize : 24,
             padding : 20,
             marginVertical : 8,
             color : '#EDEFEE',
             textAlign : 'center',
          }}
         >
            Petit Coeur Technologie est une entreprise informatique spécialisée dans la conception de solution informatique adaptée au besoin des entreprises locales et internationales.
            Dans le conseil et l'accompagnement en transformation digitale.
         </Text>
       </View>
    );
}