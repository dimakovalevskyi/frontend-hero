import { Scene } from '../scene';

export class MenuScene extends Scene {
    constructor(game) {
        super(game);
        this.resources = {
            graphics: {
                title: './img/title.png'
            }
        };
    }

    update() {
        if (this.game.control.fire) {
            this.setStatus(Scene.START_GAME);
        }
    }

    render(time) {
        super.render(time);
        this.screen.drawImage(0, 0, 'title');
        this.screen.print(200, 400, '#000000', 'Press SPACE to start')
    }

}
