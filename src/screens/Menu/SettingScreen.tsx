// SettingScreen.tsx
import React, { FC} from 'react';
import {Switch} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {_Text} from "components";
import styled from "styled-components/native";
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import HeaderNavBar from "routes/components/HeaderNavBar";
import Spacing from "styles/Spacing";
import {MenuStackParamList} from "navType";
import Margin from "src/components/Margin";

type SettingScreenProps = StackScreenProps<MenuStackParamList, 'SettingScreen'>;

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};

  justify-items: center;
`
const SettingOptionBox = styled.TouchableOpacity`
  width: 80%;
  height: ${Spacing.box.sm}px;
  margin-left: 10%;
  background-color: ${({theme}) => theme.colors.PRIMARY};
  justify-content: center;

  border-radius: 10px;
`;

const SettingScreen: FC<SettingScreenProps> = ({ navigation }) => {
  const {isDark, toggleButton, theme} = useThemes();
  const toggleColorScheme = () => { toggleButton(); return }

  return (
          <Container>
      <HeaderNavBar display canGoBack theme={theme} title="Setting" color={theme.colors.LINKTREE_BLACK} />
            <Margin nav mb={10} />
            <SettingOptionBox onPress={toggleColorScheme}>
              <_Text> switch Theme </_Text>
            </SettingOptionBox>

            <_Text size={Spacing.icon.md} >Welcome to the Setting Screen!</_Text>
            <Switch value={isDark} onValueChange={toggleColorScheme} style={{alignSelf: 'center'}}/>
            <BottomNavBar display theme={theme} color={theme.colors.LINKTREE_BLACK}  />
          </Container>
  );
}

export default SettingScreen;