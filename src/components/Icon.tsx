
import Calendar from '../../assets/icons/calendar.svg';
import styled from 'styled-components/native';

type Props = {
    name?: keyof typeof icons;
    size?: number;
    color?: string;
}

const icons = {
    calendar: Calendar
};

export default function Icon({ name = 'calendar', size = 30, color = 'black' }: Props) {

    const IconComponent = icons[name];

    return (
        <Container size={size}>
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
