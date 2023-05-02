import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from '../screens/products';
import ProductDetail from '../screens/details';
import Cart from '../screens/cart';
const MainStack = createNativeStackNavigator();
const AppNavigation = () => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash">
      <MainStack.Screen component={Products} name={'products'} />
      <MainStack.Screen component={ProductDetail} name={'productDetail'} />
      <MainStack.Screen component={Cart} name={'cart'} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
