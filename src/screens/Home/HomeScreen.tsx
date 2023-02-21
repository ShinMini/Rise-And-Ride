import React, { FC } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import styled from "styled-components/native";

// home components
import HomeMainContent from "src/components/Home/HomeMainContent";
import HomeHeaderContent from "src/components/Home/HomeHeaderContent";

/** ------------ styled components  ----------------*/

/** ----------- Main Content ----------------- */
type HomeScreenProps = {
    navigation: StackNavigationProp<RootStack.RootStackParamList, 'Home'>;
};

const HomeScreen: FC<HomeScreenProps> = () => {

    return (
                <HomeMainContent />
    );
}

export default HomeScreen;
