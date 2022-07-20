import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function Footer() {
  return (
    <View style={{ flex: 1 , backgroundColor : "green"}}>
      <ScrollView>main</ScrollView>
      <View>
        <Text>footer</Text>
      </View>
    </View>
  );
};