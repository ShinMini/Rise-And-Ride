import React, {FC} from 'react'
import styled from 'styled-components/native'
import {SText} from "components";
import {Regular} from "styles/Typo";

const Container = styled.View`
    flex: 1;
`

const ContentButton = styled.TouchableOpacity`
    width: 80%;

    justify-content: center;
    align-items: center;

    padding: 20px 40px;
    margin: 10px 0;

    background-color: ${({theme}) => theme.colors.BUTTON};
`;

const ContentText = styled(Regular)`
    color: ${({theme}) => theme.colors.POINT};
    font-family: ${({theme}) => theme.fonts.NunitoRegular};
`

type tempDataType = {
    cardId: string;
    index: number;
}

const DATA = new Array(10).fill(0).map((_, index) => ({cardId: Math.floor(Math.random() * 1000).toString(), index}));

const HomeMainContent: FC = () => {
    const temp = 1;

    return (
            <Container>
                <ContentButton onPress={() => console.log('hi')}>
                    <ContentText>버튼</ContentText>
                </ContentButton>


            </Container>
    )
}

export default HomeMainContent;
