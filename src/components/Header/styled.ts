import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;

  padding: 10px 0;
`;

export const Image = styled.Image`
  width: 44px;
  height: 44px;

  border-radius: 10%;

  object-fit: contain;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  
  color: #121212;
`;

export const SubTitle = styled.Text`
  color: #909090;

  font-size: 14px;
  font-weight: 500;
`;