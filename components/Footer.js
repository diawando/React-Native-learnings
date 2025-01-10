import * as React from 'react';
import { View, Text } from 'react-native';

export default function Footer(){

    return(
       <View style = {{
                flex : 0.0,
                backgroundColor : '#F4CE14',
       }}>
          <Text style = {{
            padding: 10,
            fontSize: 10,
            color : 'black',
            textAlign: "center"
          }}
          >
            All rights reserved by Petit Coeur Technologie
         </Text>
       </View>
    );
}