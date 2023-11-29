import React from 'react';
import styled from 'styled-components/native';
import { Switch } from '../../../Switch';

export const FavoriteSwitch = () => {

    const handlePress = (isFavorite: boolean) => {
        console.log('is this flight favorite?', isFavorite);
    };

    return (
        <Container>
            <Text>Favorite</Text>
            <Switch
                onChange={handlePress}
            />
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 4px 15px 4px 0px;
`;

const Text = styled.Text`
    font-size: 15px;
    color: #000000;
    font-family: Roboto-Bold;
    margin-right: 8px;
`;