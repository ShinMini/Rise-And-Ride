import React, { FC } from "react";
import {FlatList, Image, TouchableOpacity} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Container} from "./styles";
import {SButton, SText} from 'components'
import {toggleTheme} from 'stores';
import { useDispatch } from 'react-redux';
import BottomNavbar from "routes/BottomNavbar";
import {NavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import {HomeRouteProp} from "src/routes/HomeStack";
import {Regular} from "styles/Typo";

// import skia module for svg loading
import {
    Canvas,
    ImageSVG,
    useSVG
} from "@shopify/react-native-skia";

// import moducard images
import BLUE_BACKGROUND_MOBY_CARD from "assets/svg/modu_card_img/blue_background_moby_card.svg";
import WHITE_BACKGROUND_MOBY_CARD from "assets/svg/modu_card_img/white_background_moby_card.svg";
import GRID_MOBY_CARD from "assets/svg/modu_card_img/grid_moby_card.svg";
import RIDING_MOBY_CARD from "assets/svg/modu_card_img/riding_moby_card.svg";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

const MODUCARD_DATA_STR = [BLUE_BACKGROUND_MOBY_CARD, WHITE_BACKGROUND_MOBY_CARD, GRID_MOBY_CARD, RIDING_MOBY_CARD]

const HomeScreen: FC<HomeScreenProps> = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList, 'Home'>>()
    const route = useRoute<HomeRouteProp<'HomeScreen'>>()
    const MODUCARD_DATA = MODUCARD_DATA_STR.map((item) => {
        return {svg: useSVG(item)}
    })

    const toggleButton = () => dispatch(toggleTheme());

  return (
    <Container>
      <Regular>Test용 어플입니다.</Regular>
        <FlatList
        horizontal
        keyExtractor={(item, index) => index.toString()}
                data={MODUCARD_DATA} renderItem={({item}) => {
            if(!item.svg) return <></>
            return (
                    <TouchableOpacity>
                        <Canvas style={{ width: 354, height: 256}}>
                            <ImageSVG
                                    svg={item.svg}
                                    x={0}
                                    y={0}
                                    width={354}
                                    height={256}
                            />
                        </Canvas>
                    </TouchableOpacity>
            )
        }}
        />
      <SButton onPress={() => navigation.navigate('User', { userId: 'min121234' })} >
        <SText>User</SText>
      </SButton>
      <SButton onPress={() => navigation.navigate('Profile')}><SText>Profile</SText></SButton>

        <SButton onPress={toggleButton} style={{marginBottom: 30}}>
          <SText>Toggle Theme</SText>
        </SButton>
        <BottomNavbar />
    </Container>
    );
}

export default HomeScreen;
