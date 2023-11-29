
export abstract class DateProvider {
    
    protected date: Date;

    constructor(date: Date) {
        this.date = date;
    }

    abstract get(): Date ;

    abstract display(): string;

    abstract timeRemaining(date: Date): string;

    abstract displayTime (date: Date): string;
    
}