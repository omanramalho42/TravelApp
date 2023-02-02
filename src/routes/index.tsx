import React from 'react'

import Router from './index.routes'

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