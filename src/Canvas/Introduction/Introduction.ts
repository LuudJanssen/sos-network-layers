import { Container } from "pixi.js"
import { Title } from "./Title/Title"

export class Introduction extends Container {
    constructor() {
        super()
        this.addChild(new Title())
    }
}
