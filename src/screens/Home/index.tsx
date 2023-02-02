import React from 'react'

import { 
  Container,
  Title
} from './styled'

import { 
  Button, 
  Layout,
  Header,
  Filter,
  CategoriesList,
  TransactionsHistory
} from '../../components/'

import { useState } from 'react'
import { CategorieProps } from 'src/components/CategoriesList';
import { useLayoutEffect } from 'react';

export interface TransactionProps {
  value: number;
  categorie: CategorieProps;
}

export interface TransactionsProps {
  transaction: TransactionProps;
}

const Home:React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionsProps[]>();
  useLayoutEffect(() => {
    setTransactions([
      { transaction: { value: 100, categorie: { type: 'Alimentacão' } }},
      { transaction: { value: -200, categorie: { type: 'Lazer' } }},
      { transaction: { value: 200, categorie: { type: 'Alimentacão' } }},
      { transaction: { value: 200, categorie: { type: 'Serviços' } }},
      { transaction: { value: 1200, categorie: { type: 'Saúde' } }},
      { transaction: { value: 60, categorie: { type: 'eletricidade' } }},
      { transaction: { value: 100, categorie: { type: 'Serviços' } }}
    ])
  },[]);

  return (
    <Layout>
      <Container>
        
        <Header />
        <Filter />
        <CategoriesList 
          transactions={transactions}
        />

        <TransactionsHistory
          transactions={transactions} 
        />

      </Container>
    </Layout>
  )
}

export default Home