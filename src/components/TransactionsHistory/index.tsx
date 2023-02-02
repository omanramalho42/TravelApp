import React from 'react'

import { 
  ScrollView,
  View
} from 'react-native'

import { 
  Container, 
  Title, 
  CardButton, 
  CardButtonText, 
  CardPrice, 
  CardText, 
  CardTransaction, 
  ContentInfo,
  CardImage
} from './styled'

import { useNavigation } from '@react-navigation/native';

const TransactionsHistory = ({ transactions }: any) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title> Histórico de Transações </Title>

      <ScrollView horizontal={false} style={{ height: 200 }}>
        {transactions?.map(({ transaction }:any) => (
          <CardTransaction color="white">
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <CardImage 
                source={{ 
                  uri: 'http://github.com/omanramalho42.png' 
                }} 
              />
              <ContentInfo>
                <CardText>
                  { transaction.categorie.type }
                </CardText>
                <CardPrice value={transaction.value}>
                  R$ { transaction.value }
                </CardPrice>
              </ContentInfo>
            </View>
            <CardButton
              onPress={() =>
                navigation.navigate(
                  //@ts-ignore
                  'TransactionScreen', { transaction }
                )
              }
            >
              <CardButtonText>
                Detalhes
              </CardButtonText>
            </CardButton>
          </CardTransaction>
        ))}
      </ScrollView>
    </Container>
  )
}

export default TransactionsHistory