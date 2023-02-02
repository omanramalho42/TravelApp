import React from 'react'

import Router from './index.routes'
import { View } from 'react-native'

import { 
  NavigationContainer 
} from '@react-navigation/native'

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Router /> 
    </NavigationContainer>
  )
}

export default Routes