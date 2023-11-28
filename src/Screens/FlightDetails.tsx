import React from 'react'
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native'
import { useFadeIn } from '../hooks/useFadeIn';
import { StatusTag } from '../components/FlightDetails';
import { AirplaneTimerStatus } from '../components/AirplaneTimerStatus';

export const FlightDetails = () => {

    const { top } = useSafeAreaInsets();

    const { fadeIn, opacity } = useFadeIn();

    return (
        <Container>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/6999/5ac1/5c32d800b7f87760fab16801c4a62e6d?Expires=1702252800&Signature=qGomywLQcMUxvnNeknZd0iFrQSXXE8vbQQtx6F~X3JFZGpbaOCR7FSJGXdQqf3~wj~AnKMqaVvUW6FgSu9MZbTHMx4KSEcCmW1sw1r~t6IFL~xAwZ9FJ2IeI3~8xyNPDqBa3U3k15qDbhu70jH~cB8vnOXO9h3nHS4orJ0qmUKbFE8Tw5RkVw9aKYtdeQtJWdSdorkF8QpZPePzgRyDKYi3oIIW3FMvwVKt1v8whPbLZAJ-MlW6-K4dmO0UILOpvKO8qvLZ6nrYl0k~lNbDclkX1Dh28vWsVepnCJJsMQvyMKuvKJAnCh~3Scj4tErzSOkjeWCHoo7nBN9p~ZNsrXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                onLoadEnd={() => fadeIn()}
                style={{ opacity }}
            />

            <DetailsContainer>
                <FlightInfo >
                    <View>
                        <FlightNumber>
                            <AirlineText>{`${'AM'} `}</AirlineText>
                            {'500'}
                        </FlightNumber>
                        <FlightDate>{'Tuesday, Nov 21'}</FlightDate>
                    </View>

                    <StatusTag
                        status='ARRIVED'
                    />
                </FlightInfo>

                <TimerStatusContainer>
                    <AirplaneTimerStatus
                        progress={0.7}
                    />
                </TimerStatusContainer>

                <FlightDetailsContainer>
                    <Title>
                        Flight Details
                    </Title>

                    <DepartureHeader>
                        <SubTitle>
                            Departure
                        </SubTitle>

                        <Place>
                            {'Mexico City'}
                        </Place>
                    </DepartureHeader>

                    <DepartureDataContainer>

                        <TerminalContainer>
                            <DepartureDataTitle>
                                {'Terminal'}
                            </DepartureDataTitle>
                            <DepartureDataInfo>
                                {'2'}
                            </DepartureDataInfo>
                        </TerminalContainer>

                        <GateContainer>
                            <DepartureDataTitle>
                                {'Gate'}
                            </DepartureDataTitle>

                            <DepartureDataInfo>
                                {'A1'}
                            </DepartureDataInfo>
                        </GateContainer>

                        <BoardingContainer>
                            <DepartureDataTitle>
                                {'Boarding'}
                            </DepartureDataTitle>

                            <DepartureDataInfo>
                                {'12:00'}
                            </DepartureDataInfo>
                        </BoardingContainer>

                    </DepartureDataContainer>

                    <ArrivalHeader>
                        <SubTitle>
                            Arrival
                        </SubTitle>

                        <ArrivalInfo>
                            {'Cancun'}
                        </ArrivalInfo>
                    </ArrivalHeader>

                    <DepartureDataContainer>

                        <TerminalContainer>
                            <DepartureDataTitle>
                                {'Terminal'}
                            </DepartureDataTitle>
                            <DepartureDataInfo>
                                {'2'}
                            </DepartureDataInfo>
                        </TerminalContainer>

                        <GateContainer>
                            <DepartureDataTitle>
                                {'Gate'}
                            </DepartureDataTitle>

                            <DepartureDataInfo>
                                {'A1'}
                            </DepartureDataInfo>
                        </GateContainer>


                    </DepartureDataContainer>

                </FlightDetailsContainer>

                <Line />
            </DetailsContainer>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`

const Image = styled(Animated.Image)`
    height: 600px;
    width: 600px;
    top: -104px;
    left: -22px;
    position: absolute;
`

const DetailsContainer = styled.View`
    background-color: #FFFFFF;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    /* height: 60%; */
    padding-bottom: 92px;
`

const Line = styled.View`
    height: 5px;
    width: 36px;
    background-color: #CCCCCC;
    border-radius: 2.5px;
    align-self: center;
    top: 10px;
    position: absolute;
`;

const FlightInfo = styled.View`
    padding: 20px 25px 20px 25px;
    border-bottom-width: 1px;
    border-color: #CCCCCC;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const FlightNumber = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000000
`
const AirlineText = styled.Text`
    color: rgba(0, 0, 0, 0.3);
`

const FlightDate = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: #000000;
`

const TimerStatusContainer = styled.View`
    padding-top: 20px;
    padding-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
    border-bottom-width: 1px;
    border-color: #CCCCCC;
`

const FlightDetailsContainer = styled.View`
    padding: 20px 25px 20px 25px;
`

const Title = styled.Text`
    font-size: 18px;
    font-family: Roboto-Bold;
    color: #000000;
`

const DepartureHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const SubTitle = styled.Text`
    font-size: 14px;
    font-family: Roboto-Bold;
    color: #000000;
`

const Place = styled.Text`
    font-size: 12px;
    font-family: Roboto-Regular;
    color: rgba(0, 0, 0, 0.5);
`

const DepartureDataContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const TerminalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const GateContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const BoardingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const DepartureDataTitle = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
`

const DepartureDataInfo = styled.Text`
    font-size: 14px;
    color: #000000;
    font-weight: bold;
`

const ArrivalHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const ArrivalTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000000;
`

const ArrivalInfo = styled.Text`
    font-size: 14px;
    color: #000000;
`

const ArrivalDataContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const ArrivalDataTitle = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
`

const ArrivalDataInfo = styled.Text`
    font-size: 14px;
    color: #000000;
    font-weight: bold;
`

