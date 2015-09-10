'use strict';

export default class MainMenu {
  constructor() {
  }

  create() {
    let text = this.game.add.bitmapText(this.game.world.centerX, 40, 'joystix', 'GameThing');
    text.anchor.set(0.5, 0.5);
  }
}
