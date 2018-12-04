import { Canvas } from "../Canvas/Canvas"

export class Game {
    private canvas: Canvas

    constructor() {
        this.canvas = new Canvas()
    }

    /**
     * Binds the game to an HTML element
     *
     * @param element The element you want the game to bind to
     */
    public bindTo(element: HTMLElement) {
        this.canvas.bindTo(element)
    }
}
