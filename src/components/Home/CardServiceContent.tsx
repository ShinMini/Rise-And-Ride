import {CARD_WIDTH, styles, width} from "src/components/Home/home.style";
import React from "react";

// new version -------------
import { FontAwesome } from '@expo/vector-icons';
import {StackNavigationProp} from "@react-navigation/stack";
import {DigitBold, DigitExtraBold, DigitThin, Thin} from "styles/Typo";
import styled from "styled-components/native";

const PointIconContainer = styled.View`
    position: absolute;

    top: 10px;
    left: 10px;
`

const CardPointText = styled(DigitExtraBold)`
    color: ${({theme}) => theme.colors.MAIN};

    font-size: 24px;
    margin: 8px 0 10px 40px;
`

const CardPointDigitText = styled(DigitBold)`
    align-self: center;
`

const CardPointDigitSmallText = styled(DigitBold)`
    font-size: 20px;
    color: ${({theme}) => theme.colors.POINT};

    align-self: flex-end;
    margin-top: 10px;
    margin-right: 10px;
`



const ServiceContainer = styled.View`
    width: ${width * 0.85}px;
    height: 160px;

    margin-top: 25px;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.SURFACE};

    border-radius: 10px;
`

const ModuPointContainer = styled.TouchableOpacity`
    width: ${width * 0.45}px;
    height: 140px;
    margin: 10px 5px 0 10px;

    border-radius: 10px;

    background-color: ${({theme}) => theme.colors.BACKGROUND_OPPOSITE};
`

const ModuCardCashContainer = styled.View`
    width: ${width * 0.3}px;
    height: 160px;

    margin: 10px;

    flex-direction: column;
`

const RemitView = styled.TouchableOpacity`
    width: 100%;
    height: 64px;

    border-radius: 10px;

    margin-bottom: 10px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.BACKGROUND_OPPOSITE};
`

const RemitText = styled(DigitExtraBold)`
    font-size: 22px;
    color: ${({theme}) => theme.colors.GREEN};
`

const WithDrawText = styled(DigitExtraBold)`
    font-size: 22px;
    color: ${({theme}) => theme.colors.RED};
`


const CardServiceContent = () => {

    return (
    <ServiceContainer>
        <ModuPointContainer style={styles.shadow}>
            <PointIconContainer>
                <FontAwesome name="product-hunt" size={24} color="#40A4FF" />
            </PointIconContainer>
            <CardPointText >My Point</CardPointText>
            <CardPointDigitText>12,491,900</CardPointDigitText>
            <CardPointDigitSmallText>Point</CardPointDigitSmallText>
        </ModuPointContainer>
        <ModuCardCashContainer style={styles.shadow}>

            <RemitView>
                <RemitText>Remit</RemitText>
            </RemitView>

            <RemitView>
                <WithDrawText>With</WithDrawText>
                <WithDrawText>drawal</WithDrawText>
            </RemitView>
        </ModuCardCashContainer>

    </ServiceContainer>
    )
}

export default CardServiceContent
