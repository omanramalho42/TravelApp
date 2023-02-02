import React from 'react'

import { 
  ButtonStyled, 
  Text 
} from './styled'

interface ButtonProps {
  title: string;
  type: 'sm' | 'md' | 'lg';
}

const Button = ({ title, type }: ButtonProps) => {
  return (
    <ButtonStyled type={type}>
      <Text>{ title }</Text>
    </ButtonStyled>
  )
}

export default Button