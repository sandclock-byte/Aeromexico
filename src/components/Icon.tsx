
import { ViewStyle } from 'react-native';
import Calendar from '../../assets/icons/calendar.svg';
import BackArrow from '../../assets/icons/back_arrow.svg';
import Airplane from '../../assets/icons/airplane.svg';
import styled from 'styled-components/native';

const icons = {
    calendar: Calendar,
    back_arrow: BackArrow,
    airplane: Airplane
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
