import React from 'react'

import { 
  Container 
} from './styled'

import { Text } from 'react-native'

const Home:React.FC = () => {
  return (
    <Container>
      <Text 
        style={{ 
          fontSize: 20, 
          color: 'red' 
        }}
      >
        Home
      </Text>
    </Container>
  )
}

export default Home