import React from 'react';
import { TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import { useAnimationButton } from '../hooks/useAnimationButton';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

type Props = {
    onPress?: () => void;
    title?: string;
};

export const Button = ({ onPress = () => { }, title = 'Button' }: Props) => {

    const { onPressIn, onPressOut, scale } = useAnimationButton();

    return (
        <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
        >
            <AnimatedView
                style={{ transform: [{ scale }] }}
            >
                <Title>{title}</Title>
            </AnimatedView>
        </TouchableWithoutFeedback>
    )
}


const AnimatedView = styled(Animated.View)`
    background-color: #000;
    height: ${height * 0.06}px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

const Title = styled.Text`
    font-size: ${height * 0.025}px;
    color: #FFFFFF;
    font-family: Roboto-Medium;
`;