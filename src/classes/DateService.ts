
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

    public timeRemaining(date: Date): string {

        const {hours, minutes} = intervalToDuration({
            start: this.date,
            end: date
        });

        return `${hours}h${minutes}m`;
    }
}