import { View } from 'react-native';
import styled from 'styled-components/native';

import { StatusTag } from './StatusTag';

export const FlightInfo = () => {
    return (
        <Container >
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
        </Container>
    )
}

const Container = styled.View`
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