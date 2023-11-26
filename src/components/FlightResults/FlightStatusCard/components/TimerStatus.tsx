import React from 'react';
import styled from 'styled-components/native';
import { AirplaneLine } from './AirplaneLine';

export const TimerStatus = () => {
    return (
        <Container>
            <Header>
                <HourHand>06:24</HourHand>
                <AirplaneLine />
                <HourHand>09:21</HourHand>
            </Header>

            <Body>
                <Place>MEX</Place>
                <Duration>2h 28m</Duration>
                <Place>CUN</Place>
            </Body>
        </Container>
    )
}


const Container = styled.View`
    padding: 15px 15px 10px 15px;
`;

const Header = styled.View`
    flex-direction: row;
`;

const Body = styled.View`
    flex-direction: row;
`;

const HourHand = styled.Text`
    font-size: 22px;
    color: #000000;
    font-family: Roboto-Bold;
    line-height: 22px;
`;

const Place = styled.Text`
    font-size: 14px;
    color: #000000;
    font-family: Roboto-Regular;
`;

const Duration = styled.Text`
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-family: Roboto-Bold;
    flex: 1;
    text-align: center;
    margin-top: 4px;
`;