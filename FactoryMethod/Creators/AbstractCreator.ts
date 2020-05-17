import { IFigure } from "../TetrisFigures/IFigure";

export abstract class Creator {
    public abstract factoryMethod(): IFigure;

    public someOperation(): string {
        const figure = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${figure.operation()}`;
    }
}