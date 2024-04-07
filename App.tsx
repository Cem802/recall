import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import Chat from './src/screens/Chat/Chat';
import Home from './src/screens/Home/Home';
import Header from './src/components/Header/Header';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

const setHeader = ({
  navigation,
  route,
  options,
}: {
  navigation: any;
  route: any;
  options: any;
}) => {
  const title = getHeaderTitle(options, route.name);

  return <Header title={title} openDrawer={() => navigation.openDrawer()} />;
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Recall"
          screenOptions={{
            header: setHeader,
            drawerStyle: {
              backgroundColor: '#000',
            },
            drawerInactiveTintColor: 'grey',
            drawerActiveTintColor: '#7468F3',
          }}>
          <Drawer.Screen name="Recall" component={Chat} />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
