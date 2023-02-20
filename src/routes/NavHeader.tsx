import { getHeaderTitle } from '@react-navigation/elements';
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import React, {FC} from "react";
import {StackHeaderProps} from "@react-navigation/stack";

type MyHeaderProps = {
    title: string,
    leftButton: React.ReactNode,
    style?: any
};

const MyHeader: FC<MyHeaderProps> = ({ title, leftButton, style }) => {
    return (
            <View style={[styles.header, style]}>
                    {leftButton}
                    <Text style={styles.headerTitle}>{title}</Text>
            </View>
    );
};

const MyBackButton: FC<{onPress: () => void}> = ({onPress}) => {
    return (
            <TouchableOpacity onPress={onPress} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
    );
};

export const NavHeader = ({ navigation, route, options, back }: StackHeaderProps) => {
    const title = getHeaderTitle(options, route.name);
    const goBack = () => navigation.goBack();

    return (
            <MyHeader
                    title={title}
                    leftButton={
                        back ? <MyBackButton onPress={goBack} /> : undefined
                    }
                    style={options.headerStyle}
            />
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: '#000',
    },
});
