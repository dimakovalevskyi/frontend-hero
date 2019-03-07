export class Scene {
    constructor(game) {
        this.game = game;
        this.prevNow = 0;
        this.fps = false;
        window.drawFps = (value) => {
            this.fps = value;
        };
    }

    init() {
        this.isActive = true;
    }

    displayFps() {
        const now = performance.now();
        const fps = Math.trunc(1000 / (now - this.prevNow));
        this.game.screen.context.fillStyle = '#aaaaaa';
        this.game.screen.context.font = '30px Arial';
        this.game.screen.context.fillText(fps.toString(), 0, 30);
        this.prevNow = now;
    }

    render(time) {
        if (this.fps) {
            this.displayFps();
        }
    }
}