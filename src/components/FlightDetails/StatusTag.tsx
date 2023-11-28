import React from 'react';
import styled from 'styled-components/native';

const getStatusData = (status: string) => {

    const statusData: { [key: string]: { statusText: string; color: string; textColor: string } } = {
        'ARRIVED': {
            statusText: 'Arrived',
            color: '#000000',
            textColor: '#FFFFFF',
        },
        'DELAYED': {
            statusText: 'Delayed',
            color: '#FECB2F',
            textColor: '#000000',
        },
        'ON_TIME': {
            statusText: 'on time',
            color: '#2E9509',
            textColor: '#FFFFFF',
        },
        'IN_THE_AIR': {
            statusText: 'In the air',
            color: '#1872B3',
            textColor: '#FFFFFF',
        },
    };

    return statusData[status] || statusData['ON_TIME'];
}

type Props = {
    status: string;
};

export const StatusTag = ({ status }: Props) => {

    const { statusText, color, textColor } = getStatusData(status);

    return (
        <Container color={color}>
            <StatusText
                color={textColor}
            >
                {statusText}
            </StatusText>
        </Container>
    )
}

const Container = styled.View<{ color: string }>`
    background-color: ${({ color }) => color};
    padding: 4px 8px 4px 8px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const StatusText = styled.Text<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 12px;
    font-family: Roboto-Bold;
`;