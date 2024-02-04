import React from "react";
import { View, Text, SafeAreaView} from "react-native";
import { newScreen } from "./src/newScreen";

export default function App() {
  return  (
    <SafeAreaView style={{flex:1}}>
      <newScreen/>
    </SafeAreaView>
  );
}