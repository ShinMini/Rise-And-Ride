import React, {FC} from 'react'
import styled from 'styled-components/native'
import {SText} from "components";
import {Regular} from "styles/Typo";

const Container = styled.View`
    flex: 1;
`
const Box = styled.View`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.colors.DEEP_BLUE};

    align-content: center;
    justify-content: center;
`;

const BoxText = styled(Regular)`
    color: ${({theme}) => theme.colors.POINT};

    font-family: ${({theme}) => theme.fonts.Yeon};

    justify-content: center;
    align-items: center;
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
                <Box><BoxText> hi there :) </BoxText></Box>
                <Box><BoxText> this is Home! </BoxText></Box>

            </Container>
    )
}

export default HomeMainContent;
