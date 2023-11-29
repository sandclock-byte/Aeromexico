
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import Airplane from '../../assets/icons/airplane.svg';
import Arrival from '../../assets/icons/arrival.svg';
import Arrow from '../../assets/icons/arrow.svg';
import BackArrow from '../../assets/icons/back_arrow.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Departure from '../../assets/icons/departure.svg';

const icons = {
    airplane: Airplane,
    arrival: Arrival,
    arrow: Arrow,
    back_arrow: BackArrow,
    calendar: Calendar,
    departure: Departure,
};

export type IconName = keyof typeof icons;

type Props = {
    name?: IconName;
    size?: number;
    color?: string;
    style?: ViewStyle;
}


export const Icon = ({ name = 'calendar', size = 30, color = 'black', style = {} }: Props) => {

    const IconComponent = icons[name];

    return (
        <Container size={size} style={style}>
            <IconComponent
                width='100%'
                height='100%'
                fill={color}
            />
        </Container>
    )
}

const Container = styled.View<{ size: number }>`
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`
