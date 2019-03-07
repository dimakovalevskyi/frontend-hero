import { Screen } from './screen';
import { LoadingScene } from './scenes/loading';

export class Game {
    constructor() {
        this.screen = new Screen(800, 500);
        this.scenes = {
            loading: new LoadingScene(this)
        };
        this.goToScene('loading');
    }

    goToScene(sceneName) {
        this.currentScene = this.scenes[sceneName];
        this.currentScene.init();
    }

    loop(time) {
        if (this.currentScene.isActive === false) {
            this.goToScene(this.currentScene.nextScene);
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.loop(time));
    }

    run() {
        requestAnimationFrame(time => this.loop(time));
    }
}