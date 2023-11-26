import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { FlightNumberInput } from '../components/FlightNumberInput';

const { height, width } = Dimensions.get('window');

export const FlightNumberScreen = () => {
    return (
        <Container>
            <FormContainer>
                <InputsContainer>
                    <FlightNumberInput
                        flightNumber='500'
                    />
                </InputsContainer>
                <Button
                    title='Search Flight'
                />
            </FormContainer>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;

const FormContainer = styled.View`
    width: ${width * 0.85}px;
    height: ${height * 0.3}px;
    align-self: center;
`;

const InputsContainer = styled.View`
    flex-direction: row;
`;