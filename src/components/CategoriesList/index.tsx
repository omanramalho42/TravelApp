import React, { useState, useLayoutEffect } from 'react'

import { 
  ScrollView
} from 'react-native'

import { 
  Container,
  CardCategorie,
  Description,
  CategorieName,
  Title,
  Image
} from './styled'

import { 
  FireIcon,
  CakeIcon,
  RadioIcon 
} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

interface CategoriesProps {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  color: string;
  link?: string;
}

export interface CategorieProps {
 type: 'Alimentacão' | 'Serviços' | 'Saúde' | 'Lazer' | 'eletricidade'
}

const categories: CategoriesProps[] = [
  { 
    title : 'Serviços' ,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    veniam numquam est culpa b?`, 
    icon: <FireIcon size={32} color="#FFF" />,
    color: '#84c56c',
    link: 'NewTransaction'
  },
  { 
    title : 'Alimentação' ,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit?`, 
    icon: <CakeIcon size={32} color="#FFF" />,
    color: '#0c75cb'
  },
  { 
    title : 'Eletricidade' ,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    veniam?`, 
    icon: <RadioIcon size={32} color="#FFF" />,
    color: '#e4bd12'
  },
  { 
    title : 'Internet' ,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    veniam?`, 
    icon: <FireIcon size={32} color="#FFF" /> ,
    color: 'orange'
  }
];


const CategoriesList = ({ transactions: transaction }: any) => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);
  
  useLayoutEffect(() => {
    if(transaction.length > 0) {
      setTransactions(transaction);
    }
  }, [transaction]);

  return (
    <Container>
      <Title>Categorias</Title>
      <ScrollView horizontal={true} style={{ padding: 10 }}>
        {categories.map(({ color, icon ,title, desc }, idx) => (
          transactions?.map((
            { transaction : { categorie, value }}: any
          ) => title === categorie.type && (
            <CardCategorie 
              key={idx}
              onPress={() => 
                navigation.navigate(
                  //@ts-ignore
                  'NewTransaction', 
                  { title, value }
                )
              }
              color={color}
              //@ts-ignore
              // style={{ 
              //   shadowColor: color, 
              //   shadowOffset: 4, 
              //   shadowRadius: 5, 
              //   shadowOpacity: 0.8 
              // }}
            >
              { icon && icon }
              <CategorieName>
                { title }
              </CategorieName>
              <Description>
                { desc }
              </Description>
            </CardCategorie>
          ))
        ))}
      </ScrollView>
    </Container>
  )
}

export default CategoriesList