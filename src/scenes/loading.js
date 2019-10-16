import { Scene } from '../scene';

export class LoadingScene extends Scene {
    constructor(game) {
        super(game);
    }

    render(time) {
        super.render(time);
        this.screen.fill('#333333');
        this.screen.print(50, 50, '#dddddd', 'Loading...');
    }
}
