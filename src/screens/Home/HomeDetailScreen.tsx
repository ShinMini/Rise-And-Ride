// HomeDetailScreen.tsx
import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ButtonText, Container, ContentButton, styles} from 'src/components/Home/home.style';
import HeaderNavBar from "routes/components/HeaderNavBar";
import BottomNavBar from "routes/components/BottomNavBar";
import HomeTextContent from "src/components/Home/HomeTextContent";
import StandardTerms from "src/components/Home/StandardTerms";
import HomeCardView from "src/components/Home/HomeCardView";
import {useSelector} from "react-redux";
import {ColorSchemeState} from "stores";

type HomeDetailProps = StackScreenProps<RootStack.HomeStackParamList, 'HomeDetail'>;

const HomeDetailScreen: FC<HomeDetailProps> = ({ navigation, route}) =>  {
  const isDark = useSelector((state: ColorSchemeState) => state.dark)
  const [displayHeader, setDisplayHeader] = React.useState(true);
  const [currentScrollOffsetY, setCurrentScrollOffsetY] = React.useState(0);

  return (
          <Container>
              <HeaderNavBar display={displayHeader}/>

              <ScrollView
                      style={[styles.scrollView]}
                      scrollEventThrottle={8}
              >

                  <HomeTextContent key="HomeContent_Home" />

                  <ContentButton key="ContentButton_Home" onPress={() => navigation.navigate('HomeScreen')}
                                 style={[styles.shadow, {shadowColor: isDark ? 'white' : 'black'}]}
                  >
                      <ButtonText>Get the Card !</ButtonText>
                  </ContentButton>

              </ScrollView>

              <BottomNavBar display={displayHeader}/>
          </Container>
  );
}

export default HomeDetailScreen;
