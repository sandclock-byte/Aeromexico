import React from 'react';
import styled from 'styled-components/native';
import { AirplaneLine } from './AirplaneLine';
import { AirplaneStatusProvider } from '../../context/AirplaneStatusContext';
import { View } from 'react-native';

type Props = {
    progress: number;
    hideDuration?: boolean;
};

export const AirplaneTimerStatus = ({ progress, hideDuration }: Props) => {
    return (
        <AirplaneStatusProvider progress={progress}>
            <View>
                <Header>
                    <HourHand>06:24</HourHand>
                    <AirplaneLine />
                    <HourHand>09:21</HourHand>
                </Header>

                <Body>
                    <Place>MEX</Place>
                    <DurationContainer>
                        {
                            hideDuration && (
                                <Duration>2h 28m</Duration>
                            )
                        }
                    </DurationContainer>
                    <Place>CUN</Place>
                </Body>
            </View>
        </AirplaneStatusProvider>
    )
}


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

const DurationContainer = styled.View`
    flex: 1;
    /* align-items: center; */
`;

const Duration = styled.Text`
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-family: Roboto-Bold;
    flex: 1;
    text-align: center;
    margin-top: 4px;
`;