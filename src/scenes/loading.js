import { Scene } from '../scene';

export class LoadingScene extends Scene {
    constructor(game) {
        super(game);
        this.nextScene = 'menu';
    }

    render(time) {
        super.render(time);
        this.game.screen.fill('#333333');
    }

}