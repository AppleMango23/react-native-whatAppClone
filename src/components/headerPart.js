import React, {Fragment,useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <TouchableOpacity onPress={()=>{}}>
                <Text>
                  Hello
                </Text>
              </TouchableOpacity>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const thirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const forthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const HappyNewYear = () => {
  // const [rar, setRar] = useState({routes:[{key:'first',title:'First'},{key:'second',title:'Second'}]});
  // const [index, setIndex] = useState(0);
  const [rar, setRar] = useState({
    index: 0,
    routes: [
        { key: 'first', title: 'camera' },
        { key: 'second', title: 'chats' },
        { key: 'third', title: 'status' },
        { key: 'forth', title: 'calls' },
    ]
});

  return (
    <>
    <StatusBar backgroundColor="rgba(0,0,0,0.2)" barStyle={'light-content'}/>
    <View style={{backgroundColor:'#185942',height:50}}>
      <Text style={{color:'white',fontSize:20,paddingLeft:10,paddingTop:15}}>WhatsApp</Text></View>
    <TabView
      navigationState={rar}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: thirdRoute,
        forth: forthRoute,
      })}
      onIndexChange={index => setRar({ ...rar, index })}
      initialLayout={{ width: Dimensions.get('window').width }}
      swipeEnabled ={true}
      renderTabBar={props =>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#185942',}}
          // renderIcon={({ route, focused, color }) => (
            // <Text style={{color:'white'}}></Text>
            // <Icon
            //   name={focused ? 'abums' : 'albums-outlined'}
            //   color={color}
            // />
          // )}
        />
      }
    />
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HappyNewYear;
