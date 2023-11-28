import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    typeInput: TypeInput;
    place: string;
    placeCode: string;
};

type TypeInput = 'Origin' | 'Destination';

export const PlaceInput = ({ typeInput, place, placeCode }: Props) => {
    return (
        <Container typeInput={typeInput}>
            <Title>{typeInput}</Title>
            <PlaceText adjustsFontSizeToFit>
                {`${place} `}
                <Code>
                    {placeCode}
                </Code>
            </PlaceText>
        </Container>
    )
}

const Container = styled.View<{ typeInput: TypeInput }>`
    flex: 1;
    height: 64px;
    border-radius: 12px;
    border: 2px solid #000;
    padding: 10px;
    justify-content: center;
    margin-right: ${({ typeInput }) => typeInput === 'Origin' ? '15px' : '0px'};
`

const Title = styled.Text`
    font-size: 10px;
    color: #000000;
    font-family: Roboto-Regular;
`

const PlaceText = styled.Text`
    font-size: 16px;
    color: #000000;
    font-family: Roboto-Bold;
`

const Code = styled.Text`
    color: rgba(0, 0, 0, 0.3);
`
