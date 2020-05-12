import Phaser from "phaser";

const config = {
  type: Phaser.CANVAS,
  parent: "container",
  width: 600,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: [
    Bootloader
  ]
};

new Phaser.Game(config);
