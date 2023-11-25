import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const HeaderTrackFlight = () => {
    return (
        <Container>
            <Title>Track your flight</Title>
            <Subtitle>Keep you informed in real time!</Subtitle>
        </Container>
    )
}

const Container = styled.View`
    height: 200px;
    background-color: #F7F7F7;
    border: 1px solid #CCCCCC;
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    font-size: 26px;
    color: #000000;
    font-family: Roboto-Black;
`

const Subtitle = styled.Text`
    font-size: 16px;
    color: #000000;
    font-family: Roboto-Regular;
`
