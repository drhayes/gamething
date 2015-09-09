'use strict';

import Boot from './states/boot';
import Preload from './states/preload';
import MainMenu from './states/mainMenu';
import Main from './states/main';

var game = window.game = new Phaser.Game({
  width: 640,
  height: 480,
  renderer: Phaser.AUTO,
  state: new Boot(),
  transparent: false,
  antialias: false,
  canvasStyle: ''
});
game.state.add('preload', new Preload());
game.state.add('mainMenu', new MainMenu());
game.state.add('main', new Main());
