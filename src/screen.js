export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('gameCanvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }
}