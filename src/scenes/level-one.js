import { Scene } from '../scene';

export class LevelOneScene extends Scene {
    constructor(game) {
        super(game);
        this.resources = {
            graphics: {
                baseGrass: './img/textures/base_grass.png',
                baseStones: './img/textures/base_stones.png',
                objectStone: './img/textures/object_stone.png',
            }
        };
    }

    render(time) {
        super.render(time);
        this.screen.fill('#333333');
        this.screen.print(200, 200, '#dddddd', 'Level 1');
    }

}
