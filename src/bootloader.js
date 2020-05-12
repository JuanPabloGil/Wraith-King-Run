import heroImg from "./assets/sprites/hero.png";
import groundImg from "./assets/maps/ground.png";

class Bootloader extends Phaser.Scene{
  constructor() {
    super( { key: "Bootloader" } );
  }

  preload(){
    this.load.image('ground', groundImg );
    this.load.spritesheet('hero', heroImg, {
      frameWidth:16,
      frameHeight: 16
    });
  }

  create() {
    this.scene.start("PlayGame");
  }
}


export default Bootloader;
