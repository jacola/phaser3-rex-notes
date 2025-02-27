import phaser from 'phaser/src/phaser.js';
import NoiseFadePipelinePlugin from '../../plugins/noisefadepipeline-plugin';
import Dat from '../../plugins/utils/dat.gui/dat.gui.min.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.image('classroom', 'assets/images/backgrounds/classroom.png');
        this.load.image('road', 'assets/images/backgrounds/road.png');
    }

    create() {
        // var image0 = this.add.image(400, 300, 'road');
        var image1 = this.add.image(400, 300, 'classroom');

        var postFxPlugin = this.plugins.get('rexNoiseFadePipelinePlugin');
        var postFxPipeline = postFxPlugin.add(image1);

        var gui = new Dat.GUI();
        gui.add(postFxPipeline, 'progress', 0, 1);
        gui.add(postFxPipeline, 'noiseX', 0, 100);
        gui.add(postFxPipeline, 'noiseY', 0, 100);
        gui.add(postFxPipeline, 'noiseZ', 0, 100);
    }

    update() {
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexNoiseFadePipelinePlugin',
            plugin: NoiseFadePipelinePlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);