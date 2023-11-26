import React from 'react';
import styled from 'styled-components/native';
import { Icon } from './Icon';

export const DepartureDateInput = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>Date of departure</Title>
                <DateInput>Tuesday, Nov 21</DateInput>
            </InfoContainer>
            <Icon
                size={18.4}
                name='calendar'
            />
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    border-radius: 12px;
    border: 2px solid #000;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    height: 64px;
`

const InfoContainer = styled.View`
    justify-content: center;
    flex: 1;
`

const Title = styled.Text`
    font-size: 10px;
    color: #000000;
    font-family: Roboto-Regular;
`

const DateInput = styled.Text`
    font-size: 16px;
    font-family: Roboto-Bold;
    color: #000000;
    padding: 0px;
`