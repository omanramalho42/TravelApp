import styled from "styled-components/native";

interface ButtonStyledProps {
  type: 'sm' | 'md' | 'lg';
}

export const ButtonStyled = styled.TouchableOpacity<ButtonStyledProps>`
  background-color: blue;
  margin: auto;
  padding: ${({ type }) => 
    type === 'sm' 
    ? 5 
    : type === 'md' 
    ? 10 
    : type === 'lg' 
    ? 20 
    : 25
  }px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #121212;
`;