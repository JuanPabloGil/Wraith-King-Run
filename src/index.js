import Phaser from "phaser";
import Bootloader from "./bootloader";
import PlayGame from './scenes/playGame';
import MainMenu from './scenes/mainMenu';
import LeaderBoard from './scenes/leaderBoard';

const gameOptions = {
  playerGravity: 900,
  playerGrip: 100,
  playerSpeed: 200,
  playerJump: 400,
  playerDoubleJump: 300
};

const config = {
  type: Phaser.CANVAS,
  parent: "container",
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 300
      }
    }
  },
  scene: [
    Bootloader,
    MainMenu,
    PlayGame,
    LeaderBoard
  ]

};


new Phaser.Game(config);
