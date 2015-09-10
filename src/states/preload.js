'use strict';

export default class Preload {
  constructor() {
  }

  preload() {
    this.barBg = game.add.sprite(game.world.centerX, game.world.centerY, 'loading-bg');
    this.barBg.anchor.setTo(0.5, 0.5);
    //This bar will get cropped by the setPreloadSprite function as the game loads!
    this.bar = game.add.sprite(game.world.centerX, game.world.centerY, 'loading-fg');
    this.bar.anchor.setTo(0.5, 0.5);
    this.game.load.setPreloadSprite(this.bar);

    this.load.bitmapFont('joystix', '/media/joystix.png', '/media/joystix.fnt');
  }

  create() {
    this.game.state.start('mainMenu');
  }
}
