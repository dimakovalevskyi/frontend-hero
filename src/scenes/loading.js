import { Scene } from '../scene';

export class LoadingScene extends Scene {
    constructor(game) {
        super(game);
        this.nextScene = 'menu';
    }

    render(time) {
        this.game.screen.fill('#333333');
        super.render(time);
    }

}