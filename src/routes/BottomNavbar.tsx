import React from 'react';
import {NavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {SButton, SText} from "components";
import styled from "styled-components/native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomNavContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.color.PRIMARY};

    border-top-width: 1px;
    border-top-color: ${({theme}) => theme.color.GRAY};

    padding: 20px 20px;
    width: 90%;
`


export default function BottomNavbar() {
    const navigation = useNavigation<NavigationProp<RootStack.RootParamList>>()
    const route = useRoute<RouteProp<RootStack.RootParamList>>()
    return (
            <BottomNavContainer>
                    <SButton onPress={() => navigation.navigate('Home')}>
                        <Entypo name="home" size={24} color="black" />
                    </SButton>
                    <SButton onPress={() => navigation.navigate('User', {userId: 'min121234'})}>
                            <FontAwesome5 name="user-circle" size={24} color="black" />
                    </SButton>
                    <SButton onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="settings" size={24} color="black" />
                    </SButton>
            </BottomNavContainer>
    )
}
