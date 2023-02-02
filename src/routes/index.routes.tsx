import React from 'react'

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import { Home } from '../screens'

const Router = () => {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen 
        options={{
          headerTitleAlign: 'center',
          title: 'Home', 
          // headerShown: false 
        }}
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}

export default Router