import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.BACKGROUND_COLOR};
`;
const MainText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.color.TITLE_COLOR};
`;

const Home: FC = () => {

  return(
    <Container>
      <Image source={require('./../../../assets/favicon.png')} />
      <MainText>흠, 이거 뭐부터 만들까...</MainText>
    </Container>
    );
}

export default Home;