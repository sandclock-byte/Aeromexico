import { th } from "date-fns/locale";

export abstract class DateProvider {

    protected date: Date;

    constructor(date: Date) {
        this.date = date;
    }

    abstract get(): Date;

    abstract display(): string;

    static timeRemaining(minutes: number): string { 
        throw new Error("Method not implemented.");
    };

    abstract displayTime(date: Date): string;

}