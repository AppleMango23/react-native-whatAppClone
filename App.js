import React, {Fragment,useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import  HappyNewYear  from './src/components/headerPart';

const App = () => {
  return (
    <>
    <HappyNewYear/>
    </>
  );
};

const styles = StyleSheet.create({
    footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
