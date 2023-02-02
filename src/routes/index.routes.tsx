import React from 'react'

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import { 
  Home, 
  NewTransaction, 
  TransactionScreen 
} from '../screens'

const Router = () => {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen 
        options={{
          headerTitleAlign: 'center',
          title: 'Home', 
          headerShown: false 
        }}
        name='Home'
        component={Home}
      />
      <Screen 
        options={{
          headerTitleAlign: 'center',
          title: 'Create', 
          headerShown: true 
        }}
        name='NewTransaction'
        component={NewTransaction}
      />
      <Screen 
        options={{
          headerTitleAlign: 'center',
          title: 'Create', 
          headerShown: true 
        }}
        name='TransactionScreen'
        component={TransactionScreen}
      />
    </Navigator>
  )
}

export default Router