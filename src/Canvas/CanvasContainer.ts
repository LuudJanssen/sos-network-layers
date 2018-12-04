import { ISize } from "../shared/interfaces/Size"

export class CanvasContainer {
    public element: HTMLElement
    public resizeCallbacks: Array<() => void>

    constructor(element: HTMLElement) {
        this.element = element
        this.resizeCallbacks = []
        this.listenForResize()
    }

    /**
     * Returns the dimensions of the canvas container
     */
    public getDimensions(): ISize {
        return {
            height: this.element.clientHeight,
            width: this.element.clientWidth,
         }
    }

    /**
     * Appends the canvas element to the canvas container
     *
     * @param view The canvas element
     */
    public appendCanvas(view: HTMLCanvasElement) {
        this.element.appendChild(view)
    }

    /**
     * Registers a callback that gets called when the canvas container is resized
     *
     * @param callback The function that has to be called when the canvas container is resized
     */
    public onResize(callback: () => void) {
        this.resizeCallbacks.push(callback)
    }

    /**
     * Calls all the callbacks registered at the onResize function
     */
    public callOnResizeCallbacks() {
        this.resizeCallbacks.forEach((callback) => callback())
    }

    /**
     * listens for size changes on the element
     */
    private listenForResize() {
        // We use the window object resizing as a hack since can't use ResizeObserver yet
        window.addEventListener("resize", () => this.callOnResizeCallbacks())
    }
}
