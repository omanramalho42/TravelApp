import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { 
  Container, 
  Content, 
  Image as Avatar, 
  SubTitle,
  Title
} from './styled'

const Header:React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Olá, Oman
        </Title>
        <SubTitle>
          Bem vindo de volta ao seu cartao
        </SubTitle>
      </Content>
      <TouchableOpacity>
        <Avatar 
          source={{ 
            uri: 'http://www.github.com/omanramalho42.png'
          }}
        />
      </TouchableOpacity>
    </Container>
  )
}

export default Header