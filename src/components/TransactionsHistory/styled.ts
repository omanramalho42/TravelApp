import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;

  margin: 10px 0;

  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #000;

  margin: 10px 0;
`;

interface CardTransactionProps {
  color: string;
}

export const CardTransaction = styled.TouchableOpacity<CardTransactionProps>`
  display: flex;
  flex-direction: row;

  background-color: ${({ color }) => color};

  border-radius: 15px;

  margin: 5px 10px;

  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const CardImage = styled.Image`
  width: 42px;
  height: 42px;

  margin-right: 8px;

  border-radius: 10px;
`;

export const ContentInfo = styled.View`
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.Text`
  font-size: 14px;
  font-weight: 700;

  color: gray;
`;

interface CardPriceProps {
  value: number;
}

export const CardPrice = styled.Text<CardPriceProps>`
  font-size: 18px;
  font-weight: bold;

  text-transform: uppercase;

  color: ${({ value }) => value >= 0 ? 'green' : 'red' };
`;

export const CardButton = styled.TouchableOpacity`
  display: flex;

  border-radius: 10px;
  
  justify-content: center;
  background-color: orange;

  padding: 10px;
`;

export const CardButtonText = styled.Text`
  text-align: center;
  
  font-size: 10px;
  font-weight: 500;
  
  color: white;
`;