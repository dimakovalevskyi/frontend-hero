import { Screen } from './screen';
import { LoadingScene } from './scenes/loading';
import { MenuScene } from './scenes/menu';
import { Scene } from './scene';
import { ControlState } from './control-state';
import { LevelOneScene } from './scenes/level-one';

export class Game {
    constructor(props = {}) {
        props.width = props.width || 640;
        props.height = props.height || 480;

        this.screen = new Screen(props.width, props.height);
        this.control = new ControlState();

        this.scenes = {
            loading: new LoadingScene(this),
            menu: new MenuScene(this),
            level_1: new LevelOneScene(this),
        };
        this.resources = {
            graphics: {
                hero: './img/characters/hero.png',
                badBoy1: './img/characters/bad_boy_1.png',
            }
        };

        this.goToScene('loading');

        this.screen.loadResources(this.resources, this.scenes)
            .then(() => this.currentScene.setStatus(Scene.LOADED));
    }

    goToScene(sceneName) {
        this.currentScene = this.scenes[sceneName];
        this.currentScene.init();
    }

    getNewScene(status) {
        switch (status) {
            case Scene.LOADED:
                return 'menu';
            case Scene.START_GAME:
                return 'level_1';
            default:
                return 'menu';
        }
    }

    loop(time) {
        if (this.currentScene.status !== Scene.WORKING) {
            this.goToScene(this.getNewScene(this.currentScene.status));
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.loop(time));
    }

    run() {
        requestAnimationFrame(time => this.loop(time));
    }
}
