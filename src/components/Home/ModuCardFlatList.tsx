import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {Canvas, ImageSVG, SkSVG} from "@shopify/react-native-skia";
import React, {FC} from "react";
import styled from "styled-components/native";


const [MODU_CARD_WIDTH, MODU_CARD_HEIGHT] = [270, 170];
const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');

const MODU_CARD_WIDTH_MARGIN = (DEVICE_WIDTH - MODU_CARD_WIDTH) / 2;
const MODU_CARD_HEIGHT_MARGIN = 30;

const _ModuCardFlatList = styled.FlatList`
    background-color: ${({theme}) => theme.colors.FLAT_LIST_BACKGROUND};

    border-bottom-width: 3px;
    border-bottom-color: ${({theme}) => theme.colors.TITLE};
`;

type ModuCardFlatListProps = {
    moduCardData: Array<{svg: SkSVG | null}>;
}

const ModuCardFlatList: FC<ModuCardFlatListProps> = ({moduCardData}) => (
<_ModuCardFlatList
        horizontal
        style={styles.flatListStyle}
        pagingEnabled
        contentContainerStyle={styles.containerStyle}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        data={moduCardData}
        renderItem={({item}) => {
            if(!item?.svg) return <></>
            return (
                    <TouchableOpacity>
                        <Canvas style={styles.canvas}>
                            <ImageSVG
                                    svg={item.svg}
                                    x={MODU_CARD_WIDTH_MARGIN}
                                    y={MODU_CARD_HEIGHT_MARGIN}
                                    width={DEVICE_WIDTH}
                                    height={MODU_CARD_HEIGHT}
                            />
                        </Canvas>
                    </TouchableOpacity>
            )
        }}
/>
)

export default ModuCardFlatList;
const styles = StyleSheet.create({
    canvas: {
        width: DEVICE_WIDTH,
        height: MODU_CARD_HEIGHT + MODU_CARD_HEIGHT_MARGIN * 2,
    },
    containerStyle: {
        alignItems: 'center',
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    flatListStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})
