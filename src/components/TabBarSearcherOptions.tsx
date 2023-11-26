import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TabBarSearcherOptions = ({ navigation, state }: MaterialTopTabBarProps) => {

    const { index } = state;

    const { top } = useSafeAreaInsets();

    return (
        <>
            <Container paddingTop={top}>
                <Title>Track your flight</Title>
                <Subtitle>Keep you informed in real time!</Subtitle>
            </Container>
            <OptionsContainer>
                <ButtonsContainer>
                    <Button
                        title='Flight Number'
                        isActive={index === 0}
                        onPress={() => navigation.navigate('FlightNumberScreen')}
                    />
                    <Button
                        title='Destination'
                        isActive={index === 1}
                        onPress={() => navigation.navigate('DestinationScreen')}
                    />
                </ButtonsContainer>
            </OptionsContainer>
        </>
    )
}

type ButtonProps = {
    onPress: () => void;
    isActive?: boolean;
    title: 'Flight Number' | 'Destination';
}

const Button = ({ onPress, isActive, title }: ButtonProps) => {
    return (
        <OptionContainer
            activeOpacity={0.8}
            isActive={isActive}
            onPress={onPress}
        >
            <OptionText
                isActive={isActive}
            >
                {title}
            </OptionText>
        </OptionContainer>
    )
}

const Container = styled.View<{ paddingTop: number }>`
    height: 200px;
    background-color: #F7F7F7;
    border: 1px solid #CCCCCC;
    align-items: center;
    justify-content: center;
    ${({ paddingTop }: { paddingTop: number }) => `padding-top: ${paddingTop}px;`}
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

const OptionsContainer = styled.View`
    width: 280px;
    height: 45px;
    align-self: center;
    top: -22.5px;
    padding: 4px;
    border-radius: 4px;
    border: 1px #D6D6D6 solid;
    background-color: #FFFFFF;
    margin-bottom: -22.5px;
`

const ButtonsContainer = styled.View`
    flex-direction: row;
    background-color: #FFFFFF;
    height: 100%;
    width: 100%;
`

const OptionContainer = styled.TouchableOpacity<{ isActive?: boolean }>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ isActive }: { isActive?: boolean }) => isActive ? '#000000' : '#FFFFFF'};
    border-radius: 4px;
`

const OptionText = styled.Text<{ isActive?: boolean }>`
    font-size: 12px;
    color: ${({ isActive }: { isActive?: boolean }) => isActive ? '#FFFFFF' : '#000000'};
    font-family: Roboto-Bold;
`

