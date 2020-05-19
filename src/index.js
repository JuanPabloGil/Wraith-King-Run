import Phaser from 'phaser'; // eslint-disable-line
import Bootloader from './bootloader';
import PlayGame from './scenes/playGame';
import MainMenu from './scenes/mainMenu';
import LeaderBoard from './scenes/leaderBoard';
import Controls from './scenes/controls';

const config = {
  type: Phaser.CANVAS,
  parent: 'container',
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
    },
  },
  scene: [
    Bootloader,
    MainMenu,
    Controls,
    PlayGame,
    LeaderBoard,
  ],

};


window.game = new Phaser.Game(config);
