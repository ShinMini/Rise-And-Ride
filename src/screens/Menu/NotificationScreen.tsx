import React, { FC } from 'react';
import {_Text} from "components";
import styled from "styled-components/native";
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import HeaderNavBar from "routes/components/HeaderNavBar";
import Spacing from "styles/Spacing";
import Margin from "src/components/Margin";
import { RootStackScreenProps} from 'navType';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
  justify-items: center;
`
const NotificationOptionBox = styled.TouchableOpacity`
  width: 80%;
  height: ${Spacing.box.sm}px;
  margin-left: 10%;
  background-color: ${({theme}) => theme.colors.PRIMARY};
  justify-content: center;

  border-radius: 10px;
`;

const NotificationScreen: FC<RootStackScreenProps> = ({ navigation }) => {
  const {theme} = useThemes();

  return (
          <Container>
            <HeaderNavBar display canGoBack theme={theme} title="Notification" />
            <Margin nav mb={10}/>

            <NotificationOptionBox>
              <_Text size={Spacing.font.md} >Welcome to the Notification Screen!</_Text>
            </NotificationOptionBox>

            <_Text size={Spacing.icon.md} >Welcome to the Notification Screen!</_Text>

            <BottomNavBar display theme={theme} />
          </Container>
  );
}

export default NotificationScreen;