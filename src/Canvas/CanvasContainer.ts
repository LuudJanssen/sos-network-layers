import { ResizeSensor } from 'css-element-queries'
import { Size } from '../shared/interfaces/Size'

export class CanvasContainer {
    element: HTMLElement
    resizeCallbacks: Function[]

    constructor(element: HTMLElement) {
        this.element = element
        this.resizeCallbacks = []
        this._listenForResize()
    }

    /**
     * Returns the dimensions of the canvas container
     */
    getDimensions(): Size {
        return { 
            width: this.element.clientWidth,
            height: this.element.clientHeight,
         }
    }

    /**
     * Appends the canvas element to the canvas container
     * 
     * @param view The canvas element
     */
    appendCanvas(view: HTMLCanvasElement) {
        this.element.appendChild(view)
    }

    /**
     * Registers a callback that gets called when the canvas container is resized
     * 
     * @param callback The function that has to be called when the canvas container is resized
     */
    onResize(callback: Function) {
        this.resizeCallbacks.push(callback)
    }

    /**
     * Calls all the callbacks registered at the onResize function
     */
    callOnResizeCallbacks() {
        this.resizeCallbacks.forEach(callback => callback())
    }

    /**
     * listens for size changes on the element
     */
    _listenForResize() {
        new ResizeSensor(this.element, () => this.callOnResizeCallbacks())
    }
}