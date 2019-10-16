import { ResourceProvider } from './resourceProvider';

export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('gameCanvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        this.context.font = '22px Tahoma';
        this.resourceProvider = new ResourceProvider();
    }

    loadResources(resources, scenes) {
        return this.resourceProvider.load(resources, scenes);
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    print(x, y, color, text) {
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
    }

    drawImage(x, y, imageName) {
        this.context.drawImage(this.resourceProvider.getResource('graphics', imageName), x, y);
    }
}
