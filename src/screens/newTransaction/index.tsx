import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Text, TextInput, View } from 'react-native'

const NewTransaction:React.FC = () => {
  const { params }: any = useRoute();
  
  return (
    <View>
      <Text>
        New transaction: { params?.title } 
      </Text>

      <Text>{ params?.value }</Text>
      <TextInput>

      </TextInput>

      <Text>Titulo</Text>
      <TextInput>

      </TextInput>
    </View>
  )
}

export default NewTransaction