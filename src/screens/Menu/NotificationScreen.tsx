import React, { FC } from 'react';
import {SText} from "components";
import styled from "styled-components/native";
import BottomNavBar from "routes/components/BottomNavBar";
import useThemes from "src/hooks/useTheme";
import HeaderNavBar from "routes/components/HeaderNavBar";
import Spacing from "styles/Spacing";
import {UserStackScreenProps} from "routes/UserStack";

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
`;

const NotificationScreen: FC<UserStackScreenProps<'Notification'>> = ({ navigation }) => {
    const {theme} = useThemes();

    return (
            <Container>
                <HeaderNavBar title="Notification" canGoBack theme={theme}/>
                <NotificationOptionBox>
										<SText size={Spacing.font.md} >Welcome to the Notification Screen!</SText>
                </NotificationOptionBox>

                <SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
								<SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
								<SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
								<SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
								<SText size={Spacing.icon.md} >Welcome to the Notification Screen!</SText>
                <BottomNavBar display theme={theme} />
            </Container>
    );
}

export default NotificationScreen;
