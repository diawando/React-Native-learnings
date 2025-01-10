import * as React from 'react';
import { View } from "react-native";

import LittleLemonHeader from "../components/LittleLemonHeader";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

export default function Index() {
 
  return (
    <View  style={{
      flex : 1,
      backgroundColor: '#495E57'
      }}
    >
        <LittleLemonHeader /> 
        <Welcome />
        <Footer />
    </View>
  );
}
