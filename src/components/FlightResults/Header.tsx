import React from 'react';
import { IconButton } from '../IconButton';
import styled from 'styled-components/native';
import Icon from '../Icon';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <IconButton
                name='back_arrow'
                size={31}
                onPress={handleBack}
            />
            <InfoContainer>
                <Title>AM 500</Title>
                <DateInfoContainer>
                    <DateInfo>Tuesday, Nov 21</DateInfo>
                    <Line />
                    <ChangeContainer>
                        <Icon
                            name='calendar'
                            size={12.88}
                        />
                        <ChangeText>Change</ChangeText>
                    </ChangeContainer>
                </DateInfoContainer>
            </InfoContainer>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-Bottom: 25px;
`

const InfoContainer = styled.View`
    flex: 1;
    align-items: flex-end;
`

const Title = styled.Text`
    font-size: 32px;
    color: #000000;
    font-family: Roboto-Bold;
    margin-bottom: 5px;
`

const DateInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

const DateInfo = styled.Text`
    font-size: 16px;
    color: #000000;
    font-family: Roboto-Regular;
`

const Line = styled.View`
    width: 2px;
    height: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0px 10px 0px 10px;
`

const ChangeContainer = styled.View`
    flex-direction: row;
    align-items: center;
`
const ChangeText = styled.Text`
    font-size: 16px;
    color: #000000;
    text-decoration: underline;
    font-family: Roboto-Regular;
    margin-left: 6px;
`