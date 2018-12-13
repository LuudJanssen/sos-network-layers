import { Game } from "./Game/Game"

const gameElement = document.body
const game = new Game()

game.bindTo(gameElement)

if (module.hot) {
    module.hot.dispose(() => {
        window.location.reload()
    })
}
