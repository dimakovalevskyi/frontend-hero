export class Scene {
    constructor(game) {
        this.game = game;
        this.screen = this.game.screen;
        this.resources = {};
    }

    static get WORKING() { return 'WORKING'; }
    static get LOADED() { return 'LOADED'; }
    static get START_GAME() { return 'START_GAME'; }
    static get GAME_OVER() { return 'GAME_OVER'; }
    static get GAME_WIN() { return 'GAME_WIN'; }
    static get FINISHED() { return 'FINISHED'; }

    init() {
        this.status = this.constructor.WORKING;
    }

    setStatus(status) {
        this.status = status;
    }

    update() {

    }

    render(time) {
        this.update();
    }
}
