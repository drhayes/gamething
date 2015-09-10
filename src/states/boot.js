'use strict';

export default class Boot {
  constructor() {
  }

  preload() {
    this.game.stage.smoothed = false;
    this.game.renderer.renderSession.roundPixels = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.windowConstraints.bottom = 'visual';
    this.scale.parentIsWindow = true;

    this.game.load.image('loading-bg', '/media/loadingBarBG.png');
    this.game.load.image('loading-fg', '/media/loadingBarFG.png');
  }

  create() {
    this.game.state.start('preload');
  }
}
