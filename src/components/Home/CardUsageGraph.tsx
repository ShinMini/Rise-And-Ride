import React, { FC } from 'react';
import {animatedData, DataPoint, originalData} from '../../temp/Data';
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {Easing, View, Pressable, Text, StyleSheet} from 'react-native';

import {
    Canvas,
    Line,
    Path,
    runTiming,
    Skia,
    SkPath,
    useComputedValue,
    useValue,
    vec,
} from '@shopify/react-native-skia';
import {width} from "src/components/Home/home.style";
import styled from "styled-components/native";
import {DigitExtraBold} from "styles/Typo";

const GRAPH_WIDTH = width * 0.85;
const GRAPH_HEIGHT = 300;

const GraphCanvas = styled(Canvas)`
    width: ${GRAPH_WIDTH}px;
    height: ${GRAPH_HEIGHT}px;
    background-color: ${({theme}) => theme.colors.SURFACE};
    align-self: center;
    margin-top: 20px;
    border-radius: 15px;

`
const RowView = styled.View`
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
`
const GraphHeadText = styled(DigitExtraBold)`
    font-size: 22px;
    color: ${({theme}) => theme.colors.POINT};
`
const DisplayGraphText = styled(DigitExtraBold)`
    font-size: 18px;
    color: ${({theme}) => theme.colors.MAIN};
`

interface GraphData {
    min: number;
    max: number;
    curve: SkPath;
}

type GraphType = 'day' | 'week' | 'month' | 'year'

const displayGraph: GraphType[] = ['day', 'week', 'month', 'year']

const CardUsageGraph : FC = () => {
    const [activeGraph, setActiveGraph] = React.useState(0);
    const transition = useValue(1);
    const state = useValue({
        current: 0,
        next: 1,
    });


    const makeGraph = (data: DataPoint[]): GraphData => {
        const max = Math.max(...data.map(val => val.value));
        const min = Math.min(...data.map(val => val.value));
        const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, -30]);

        const x = scaleTime()
                .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
                .range([10, GRAPH_WIDTH - 10]);

        const curvedLine = line<DataPoint>()
                .x(d => x(new Date(d.date)))
                .y(d => y(d.value))
                .curve(curveBasis)(data);

        const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

        return {
            max,
            min,
            curve: skPath!,
        };
    };

    const transitionStart = (end: number) => {
        state.current = {
            current: end,
            next: state.current.current,
        };
        transition.current = 0;
        runTiming(transition, 1, {
            duration: 750,
            easing: Easing.inOut(Easing.cubic),
        });
    };

    const pressGraphText = () => {
        transitionStart(activeGraph === 1 ? 0 : 1);
        const setGraphIndex = activeGraph < 3 ?  activeGraph + 1 : 0
        setActiveGraph(setGraphIndex)
    }

    const graphData = [makeGraph(originalData), makeGraph(animatedData)];

    const path = useComputedValue(() => {
        const start = graphData[state.current.current].curve;
        const end = graphData[state.current.next].curve;
        const result = start.interpolate(end, transition.current);
        return result?.toSVGString() ?? '0';
    }, [state, transition]);

    return (
            <View style={styles.container}>
                <RowView>
                    <GraphHeadText>Card Usages</GraphHeadText>
                    <Pressable
                            onPress={pressGraphText}>
                        <DisplayGraphText>{displayGraph[activeGraph]}</DisplayGraphText>
                    </Pressable>
                </RowView>
                <GraphCanvas>

                    <Line
                            p1={vec(10, 30)}
                            p2={vec(400, 30)}
                            color="lightgrey"
                            style="stroke"
                            strokeWidth={1}
                    />
                    <Line
                            p1={vec(10, 150)}
                            p2={vec(400, 150)}
                            color="lightgrey"
                            style="stroke"
                            strokeWidth={1}
                    />
                    <Line
                            p1={vec(10, 270)}
                            p2={vec(400, 270)}
                            color="lightgrey"
                            style="stroke"
                            strokeWidth={1}
                    />
                    <Path style="stroke" path={path} strokeWidth={4} color="#6231ff" />
                </GraphCanvas>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 120,
    },
});

export default CardUsageGraph;
