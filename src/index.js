import Phaser from 'phaser';
import Bootloader from './bootloader';
import PlayGame from './scenes/playGame';
import MainMenu from './scenes/mainMenu';
import LeaderBoard from './scenes/leaderBoard';

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
    PlayGame,
    LeaderBoard,
  ],

};


window.game = new Phaser.Game(config);
