import styled from "styled-components/native";

interface CardCategorieProps {
  color: string;
}

export const Container = styled.View`
  display: flex;
  
  width: 100%;
`;

export const CardCategorie = styled.TouchableOpacity<CardCategorieProps>`
  display: flex;

  border-radius: 15px;

  width: 110px;
  height: 150px;

  justify-content: center;
  align-items: center;

  padding: 15px;
  margin: 10px 10px 10px 0;

  background-color: ${({ color }) => color};
`;

export const Image = styled.Image`
  width: 42px;
  height: 42px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #121212;

  margin: 10px 0;
`;

export const CategorieName = styled.Text`
  font-size: 12px;
  font-weight: 600;

  color: #FFF;

  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 6px;
  font-weight: 400;
  
  text-align: center;
  
  margin-top: 10px;
  
  color: #F9F9F9;
`;