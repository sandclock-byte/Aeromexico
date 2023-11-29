
import { format, intervalToDuration } from 'date-fns';
import { DateProvider } from './DateProvider';

export class DateService extends DateProvider {

    constructor(date: Date) {
        super(date);
    }

    public get(): Date {
        return this.date;
    }

    public display(): string {
        return format(this.date, 'eeee, MMM d');
    }

    public static timeRemaining(minutes: number): string {

        const { hours, minutes: minutesData } = intervalToDuration({
            start: new Date(0),
            end: new Date(minutes * 60 * 1000)
        });

        return `${hours}h ${minutesData}m`;
    }

    public displayTime(): string {
        return format(this.date, 'HH:mm');
    }
}