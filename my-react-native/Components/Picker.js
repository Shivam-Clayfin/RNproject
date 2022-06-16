import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import PickerList2 from "./Picker2";



export default function PickerList() {
    const [country, setCountry] = useState("Unknown");
    return (
        <View style={styles.screen}>
        <Text style={styles.text}>Select Country</Text>
        <Picker
          selectedValue={country}
          onValueChange={(value, index) => setCountry(value)}
          style={styles.picker}
        >
          <Picker.Item label="Please select your country" value="Unknown" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Belgium" value="Belgium" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Japan" value="Japan" />
        </Picker>
        <Text style={styles.text}>
            {country == null?"empty":<PickerList2/>}
            
        </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 12,
    },
    picker: {
      marginVertical: 30,
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: "#666",
    },
  });