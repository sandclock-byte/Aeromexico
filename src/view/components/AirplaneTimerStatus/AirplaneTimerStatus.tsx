import React from 'react';
import styled from 'styled-components/native';
import { AirplaneLine } from './AirplaneLine';
import { AirplaneStatusProvider } from '../../context/AirplaneStatusContext';
import { View } from 'react-native';
import { DateService } from '../../../view-model/classes/DateService';

type Props = {
    arrivalDate: Date;
    arrivalPlace: string;
    departureDate: Date;
    departurePlace: string;
    flightTime: number;
    hideDuration?: boolean;
    status: string;
};

export const AirplaneTimerStatus = ({
    arrivalDate,
    arrivalPlace,
    departureDate,
    departurePlace,
    flightTime,
    hideDuration,
    status,
}: Props) => {

    // TODO: Calculate progress in real time (Delete this condition)
    const progress = status === 'ARRIVED'
        ? 1
        : status === 'DELAYED'
            ? 0
            : status === 'ON_TIME'
                ? 0
                : 0.5;

    const departureTime = new DateService(departureDate).displayTime();
    const arrivalTime = new DateService(arrivalDate).displayTime();

    const duration = DateService.timeRemaining(flightTime);

    return (
        <AirplaneStatusProvider progress={progress}>
            <View>
                <Header>
                    <HourHand>{departureTime}</HourHand>
                    <AirplaneLine />
                    <HourHand>{arrivalTime}</HourHand>
                </Header>

                <Body>
                    <Place>{departurePlace}</Place>
                    <DurationContainer>
                        {
                            !hideDuration && (
                                <Duration>{duration}</Duration>
                            )
                        }
                    </DurationContainer>
                    <Place>{arrivalPlace}</Place>
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