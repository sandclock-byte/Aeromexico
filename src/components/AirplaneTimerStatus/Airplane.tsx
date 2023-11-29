import React from 'react';
import styled from 'styled-components/native';
import { Icon } from '../Icon';
import { useAirplaneStatus } from '../../hooks/useAirplaneStatus';

export const Airplane = () => {

    const { progress } = useAirplaneStatus();

    return (
        <Container>
            <Line
                progress={progress}
            >
                <IconContainer
                    progress={progress}
                >
                    <Icon
                        name='airplane'
                        size={30}
                        color='#000000'
                    />
                </IconContainer>
            </Line>
        </Container>
    )
}


const Container = styled.View`
    position: absolute;
    width: 100%;
`;

const Line = styled.View<{ progress: number }>`
    height: 2px;
    width: ${({ progress }) => `${progress * 100}%`};
    background-color: #000000;
    border-radius: 1px;
`;

const IconContainer = styled.View<{ progress: number }>`
    position: absolute;
    justify-content: center;
    align-items: flex-end;
    right: ${({ progress }) => `${(progress * 28) - 28}px`};
    top: -16px;
`;

