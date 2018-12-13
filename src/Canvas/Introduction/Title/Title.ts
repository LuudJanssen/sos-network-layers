import { Graphics } from "pixi.js"
import { blue, white } from "../../../shared/constants/colors"

export class Title extends Graphics {
    constructor() {
        super()
        this.beginFill(white)
        this.drawRoundedRect(0, 0, 100, 50, 10)
        this.beginFill(blue)
        this.drawCircle(20, 80, 15)
        this.endFill()
        this.x = 20
        this.y = 20
    }
}
