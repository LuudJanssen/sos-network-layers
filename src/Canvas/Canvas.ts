import { Application, Rectangle, utils } from "pixi.js"
import { CanvasContainer } from "./CanvasContainer"
import { pixiSettings } from "./pixiSettings"

/**
 * The App that shows the canvas
 */
export class Canvas extends Application {
    private container: CanvasContainer

    constructor() {

        // Call the Pixi Application constructor with our pixi settings
        super(pixiSettings)

        // Pixi wants to say hello
        utils.sayHello("SOS Network Layers")
    }

    /**
     * Binds the canvas to an element
     *
     * @param element The element to bind to
     */
    public bindTo(element: HTMLElement) {
        this.container = new CanvasContainer(element)
        this.container.appendCanvas(this.view)
        this.container.onResize(() => this.resizeToContainer())
        this.resizeToContainer()
    }

    /**
     * Resizes the canvas to the element that was
     */
    public resizeToContainer() {
        const { width, height } = this.container.getDimensions()
        this.renderer.resize(width, height)
    }
}
