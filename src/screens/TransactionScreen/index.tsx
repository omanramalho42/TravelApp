import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

const TransactionScreen = () => {
  const { 
    params: { 
      transaction: { 
        value, 
        categorie: {
          type
        } 
      } 
    } 
  }: any = useRoute();

  return (
    <View>
      <Text>
        Transaction Screen: { type }
      </Text>
    </View>
  )
}

export default TransactionScreen