import Phaser from "phaser";
import DemoScene from "./movePlayer";

const config = {
  type: Phaser.CANVAS,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [DemoScene]
};

new Phaser.Game(config);
